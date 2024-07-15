<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use App\Models\File;
use App\Models\Product_category;
use Illuminate\Support\Facades\Storage;
class ProductCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function create(){
        $users = User::count();
        $widget = [
            'users' => $users,
        ];

        $isEdit = (bool) false;
        $data     = Product_category::all();
        return view('category.create',compact('data','widget','isEdit'))->with('success','Files uploaded successfully!');
    }
    public function storeP(Request $request){

        $request->validate([
           'txtprodname' => 'required',
           'img' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        $file = $request->file('img');
        $name = time().'_'.$file->getClientOriginalName();
        try {
            $path = $file->storeAs('uploads/img_category', $name, 'public');
        } catch (\Exception $e) {
            return back()->withErrors(['error' => 'File upload failed.']);
        }
        File::create([
            'name' => $name,
            'path' => $path,
        ]);
        $isEdit = (bool) false;
        Product_category::create([
            'category_name' => $request->txtprodname,
            'active'=> 1,
            'img' => $path,
        ]);

        $data     = Product_category::all();

        return view('category.create',compact('data','isEdit'))->with('success','Files uploaded successfully!');
   }
   public function destroy($id)
   {
        $item = Product_category::find($id);
        $item->delete();

        return response()->json(['success' => true]);
   }
   public function status($id)
   {
    $item = Product_category::find($id);

    $item->active = $item->active == 1 ? 0 : 1 ;
    $item->update();
    return response()->json(['success' => true]);
   }
   public function getDatabyId($id)
   {
       $isEdit=(bool) true;
       $item  = Product_category::find($id);
       $data  = Product_category::all();
       return view('category.create',compact('item','data','isEdit'));
   }
   public function update(Request $request)
   {
       $frmAction = 'category.storeP';
       $item  = Product_category::find($request->txtcatid);
       $item->category_name = $request->txtprodname;
       $item->img   = $request->img;

       $isEdit=(bool) false;
       $file = $request->file('img');
       $name = time().'_'.$file->getClientOriginalName();
       try {
        $path = $file->storeAs('img_category', $name, 'public');
        } catch (\Exception $e) {
            return back()->withErrors(['error' => 'File upload failed.']);
        }
       $item->update();
       $data     = Product_category::all();

       return view('category.create',compact('data','frmAction','isEdit'))->with('success','updated successfuly!');
   }

}
