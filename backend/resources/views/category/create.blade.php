@extends('layouts.admin')

@section('main-content')

     <h1 class="h3 mb-4 text-gray-800">{{ __('Create category') }}</h1>

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
                <form class="row" action="{{route('category.update')}}" method="post" enctype="multipart/form-data">
                    @method('put')
                    @csrf
                    <div class="col-auto">
                        <label for="">category Name: </label>
                        <input type="hidden" name='txtcatid' value="{{$item->id ?? ''}}">
                        <input type="text" name="txtprodname" id="txtprodname" class="form-control" value="{{$item->category_name ?? ''}}">
                    </div>
                    <div class="col-auto">
                        <label for="img">Select image: </label>
                        <input type="file" id="img" name="img" class="form-control" accept="image/*" value="{{$item->img ?? ''}}" multiple>
                    </div>
                    <div class="col-auto mt-12">
                        <label for=""> </label>
                        <button type="submit" class="btn btn-outline-primary mt-4" > Update</button>
                    </div>
                </form>
                @else
                <form class="row" action="{{ route('category.storeP') }}" method="post" enctype="multipart/form-data">
                    @method('post')
                    @csrf
                    <div class="col-auto">
                        <label for="">category Name: </label>

                        <input type="text" name="txtprodname" id="txtprodname" class="form-control" >
                    </div>
                    <div class="col-auto">
                        <label for="img">Select image: </label>
                        <input type="file" id="img" name="img" class="form-control" accept="image/*" multiple>
                    </div>
                    <div class="col-auto mt-12">
                        <label for=""> </label>
                        <button type="submit" class="btn btn-outline-primary mt-4" >Add</button>
                    </div>
                </form>

                @endif

               <table class="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>category Name</th>
                        <th>category Image</th>
                        <th>Active</th>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                    </tr>
                </thead>
                <tbody>
                    @if(!empty($data))
                        @foreach($data as $info)
                        <tr id="link-{{ $info->id }}">
                            <td>{{$info->category_name}}</td>
                            <td><img src="{{ URL($info->img) }}" alt="" class="img-thumbnail" width="200" height="100" /></td>
                            <td>{{$info->active ==  1 ? 'Active' : 'De-Activated'}}</td>
                            <td>{{$info->created_at}}</td>
                            <td>{{$info->updated_at}}</td>
                            <td>
                                <a href="{{  route('category.getDatabyId',[($info->id)]) }}" id="editid"  class="btn btn-outline-secondary">Edit</a>
                                <a class="btn btn-outline-danger" onclick="confirmDelete({{ $info->id }})">Delete</a>
                                <a href="" class="btn btn-outline-secondary" onclick="confirmDeactivate({{ $info->id }})">{{$info->active ==  1 ? 'De-Activate' : 'Active'}}</a>
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
                   fetch(`/category/${id}`, {
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
           function confirmDeactivate(id) {
               let text = "Are you sure you ?";
               if (confirm(text) == true) {
                fetch(`/category/status/${id}`, {
                   method: 'PUT',
                   headers: {
                       'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                       'Accept': 'application/json'
                   }
                   })
                   .then(response => response.json())
                   .then(data => {
                       alert(data.message);

                   })
                   .catch(error => {
                       console.error(error);
                   });
               } else {
                   text = "You canceled!";
               }

           }


       </script>
@endsection
