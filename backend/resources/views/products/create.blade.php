@extends('layouts.admin')

@section('main-content')

     <h1 class="h3 mb-4 text-gray-800">{{ __('Create Product') }}</h1>

        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif
        @if (session('error'))
            <div class="alert alert-danger">
                {{ session('error') }}
            </div>
        @endif
        <div class="row">
            <div class="col-lg-12 ">
            @if($isEdit)
            <form class='row' action="{{route('product.update')}}" method="post" enctype="multipart/form-data">
            @csrf
            @method('put')
                <div class="col-auto">
                    <label for="">Product Name: </label>
                    <input type="hidden" name="txtID" value="{{ $item->id }}" />
                    <input type="text" name="txtprodname" value="{{ $item->prod_name }}" class="form-control">
                </div>
                <div class="col-auto">
                    <label for="">Product Dscriptions: </label>
                    <input type="text" name="txtdesc" class="form-control" value="{{ $item->prod_descriptions }}" >
                </div>
                <div class="col-auto">
                    <label for="">Product category: </label>
                    <select name="slcprodc" id="" class="form-control">
                        <option value="{{$select->id ?? ''}}">{{$select->category_name ?? '--select--'}}</option>
                        @foreach ($data3 as $item2)
                         <option value="{{$item2->id}}">{{$item2->category_name}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="col-auto">
                    <label for="img">Select image: </label>
                    <input type="file" id="img" name="img" class="form-control" accept="image/*" multiple>
                </div>
                <div class="col-auto">
                    <label for="">&nbsp;&nbsp;&nbsp; </label>
                    <button type="submit" class="btn btn-outline-primary mt-4" > Update</button>
                </div>
            </form>
            @else
            <form class='row' action="{{route('product.store')}}" method="post" enctype="multipart/form-data">
                @csrf
                @method('post')
                    <div class="col-auto">
                        <label for="">Product Name: </label>
                        <input type="text" name="txtprodname" class="form-control">
                    </div>
                    <div class="col-auto">
                        <label for="">Product Dscriptions: </label>
                        <input type="text" name="txtdesc" class="form-control">
                    </div>
                    <div class="col-auto">
                        <label for="">Product category: </label>
                        <select name="slcprodc" id="" class="form-control">

                            @foreach ($data3 as $item)
                             <option value="{{$item->id}}">{{$item->category_name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-auto">
                        <label for="img">Select image: </label>
                        <input type="file" id="img" name="img" class="form-control" accept="image/*" multiple>
                    </div>
                    <div class="col-auto">
                        <label for="">&nbsp;&nbsp;&nbsp; </label>
                        <button type="submit" class="btn btn-outline-primary mt-4" >Add</button>
                    </div>
                </form>
            @endif
            <table class="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Descriptions</th>
                        <th>category</th>
                        <th>Image URL</th>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        @if(!empty($products))
                            @foreach($products as $info)
                            <tr id="link-{{ $info->id }}">
                                <td>{{$info->prod_name}}</td>
                                <td>{{$info->prod_descriptions}}</td>
                                <td>{{$info->category()->first()->category_name ?? ''}}</td>
                                <td><img src="{{ URL(trim($info->img_url)) }}" alt="" class="img-thumbnail" width="200" height="100"  /></td>
                                <td>{{$info->created_at}}</td>
                                <td>{{$info->updated_at}}</td>
                                <td>
                                    <a href="{{  route('product.getDatabyId',[($info->id)]) }}" class="btn btn-outline-success" >Edit</a>
                                    <a class="btn btn-outline-danger" onclick="confirmDelete({{ $info->id }})">Delete</a>
                                </td>
                            </tr>
                            @endforeach
                        @else
                            <tr>
                                <td colspan="6" class="text-center"> No Data </td>
                            </tr>
                        @endif
                </tbody>
               </table>
            </div>
        </div>



               <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        function confirmDelete(id) {
            let text = "Are you sure you wan't to delete ?";
            if (confirm(text) == true) {
                fetch(`/product/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Accept': 'application/json'
                }
                })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    document.getElementById(`link-${id}`).remove();
                })
                .catch(error => {
                    console.error(error);
                });
            } else {
                text = "You canceled!";
            }

        }

        function getDataInfo(id)
        {
            fetch(`/product/${id}`, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Accept': 'application/json'
                }
                })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    document.getElementById(`link-${id}`).remove();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    </script>



@endsection

