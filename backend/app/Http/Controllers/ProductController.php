<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use App\Models\File;
use App\Models\Product_category;
use App\Models\Product;
class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function create(){
        $users = User::count();

        $widget = [
            'users' => $users,
            //...
        ];
        $isEdit = (bool) false;
        $products   = Product::with('category')->get();
        $categories = Product_category::with('products')->get();
        $data3= Product_category::all();
        //var_dump("<pre>".$products."</pre>"); die();
        return view('products.create',compact('products', 'categories', 'data3', 'widget','isEdit'));
    }
    public function store(Request $request)
    {
        $request->validate([
            'txtprodname' => 'required',
            'txtdesc' => 'required',
            'slcprodc' => 'required|numeric',
            'img' => ['required','image']
         ]);

         $file = $request->file('img');
         $name = time().'_'.$file->getClientOriginalName();
         $path = $file->storeAs('img_product', $name, 'public');

         File::create([
             'name' => $name,
             'path' => 'uploads/'.$path,
         ]);
         $isEdit = (bool) false;
         Product::create([
            'prod_name'        => $request->txtprodname,
            'prod_descriptions' => $request->txtdesc,
            'prod_category_id' => $request->slcprodc,
            'img_url'          => 'uploads/'.$path
         ]);

         $data1= Product_category::all();
         $data = Product::all();
         return redirect(route('product.create',compact('data1', 'data', 'isEdit')));
    }
    public function destroy($id)
    {
        $item = Product::find($id);
        $item->delete();

        return response()->json(['success' => true]);
    }

    public function status($id)
    {
     $item = Product::find($id);

     $item->active = $item->active == 1 ? 0 : 1 ;
     $item->update();
     return response()->json(['success' => true]);
    }
    public function getDatabyId($id)
    {
        $isEdit=(bool) true;
        $item  = Product::find($id);
        $select  = Product_category::find($item->prod_category_id);
        $data3= Product_category::all();
        $products   = Product::with('category')->get();
        return view('products.create',compact('item','data3','isEdit','select','products'));
    }
    public function update(Request $request)
   {
        $request->validate([
            'txtID' => 'required',
            'txtprodname' => 'required',
            'txtdesc' => 'required',
            'slcprodc' => 'required|numeric',
            'img' => ['required','image']
        ]);
       $frmAction = 'product.store';
       $item  = Product::find($request->txtID);
       $item->prod_name = $request->txtprodname;
       $item->prod_descriptions = $request->txtdesc;
       $item->prod_category_id  = $request->slcprodc;
       $item->img_url   = $request->img;

       $isEdit=(bool) false;
       $file = $request->file('img');
       $name = time().'_'.$file->getClientOriginalName();
       try {
        $path = $file->storeAs('img_product', $name, 'public');
        } catch (\Exception $e) {
            return back()->withErrors(['error' => 'File upload failed.']);
        }
       $item->update();
       $data3= Product_category::all();
       $products   = Product::with('category')->get();
       return view('products.create',compact('frmAction','isEdit','data3','products'))->with('success','updated successfuly!');
   }
}
