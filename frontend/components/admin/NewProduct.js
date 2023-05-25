"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
import {UploadFirebase} from '../../utils/UploadFirebase';
const NewProduct = ({scategories}) => {
  const [file, setFile] = useState("");
  const router = useRouter();
  const [product, setProduct] = useState({
    reference: "",
    
    designation: "",
    prix: "",
    qtestock: "",
    marque: "",
    scategorieID: "",
  });
  const [image, setImage] = useState("");
  

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Sports",
  ];
  const handleUpload = (event) => {
    event.preventDefault();
    if (!file[0].file) {
    alert("Please upload an image first!");
    }
    else {
   
    resultHandleUpload(file[0].file,event);
    }
    if (!file[0].file) {
    alert("Please upload an image first!");
    }
    };
    const resultHandleUpload = async(file) => {
    try {
    const url = await UploadFirebase(file);
    
    submitHandler(url)
    } catch (error) {
    console.log(error);
    }
    }
  

  const submitHandler = async(url) => {
    setImage(url);
   
    const produit={
      reference: product.reference,
    imageart:image,
    designation: product.designation,
    prix: product.prix,
    qtestock: product.qtestock,
    marque: product.marque,
    scategorieID: product.scategorieID
    }
    
    await(axios.post("http://localhost:3001/api/articles/",produit)
 )
  .then(res=>{
    console.log("Insert OK",res);
    router.push('/admin/products')
    router.refresh()
  })
  .catch(error=>{
    console.log(error)
    alert("Erreur ! Insertion non effectuée")
    })
 
    }
    
  return (
    <section className="container max-w-3xl p-6 mx-auto">
      <h1 className="mb-3 text-xl md:text-3xl font-semibold text-black mb-8">
        Nouveau Produit
      </h1>

      <form onSubmit={handleUpload}>
        <div className="mb-4">
          <label className="block mb-1"> Référence </label>
          <input
            type="text"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Réféence"
            name="reference"
            value={product.reference}
            onChange={onChange}
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
        <div className="mb-4">
            <label className="block mb-1"> Désignation </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              
                  name="designation"
                  value={product.designation}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
            
       



        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Marque </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="0.00"
                  name="marque"
                  value={product.marque}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1"> Catégorie </label>
            <div className="relative">
            <select
                className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                name="scategorieID"
                value={product.scategorieID}
                onChange={onChange}
                required>
                 <option></option> 
                    {scategories && scategories.map((scateg,index)=>{
                      return <option key={index} value={scateg._id}>{scateg.nomscategorie}</option>
                    })}
                </select>
                
              
              <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  className="fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </i>
            </div>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Prix Produit </label>
            <input
              type="text"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              placeholder="Prix Produit"
              name="prix"
              value={product.prix}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1"> Stock </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="0"
                  name="qtestock"
                  value={product.qtestock}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>

          

        </div>
        <div className="mb-4">
<h6>Select image</h6>
<center>
<div style={{width:200, height:250}}>
<FilePond
files={file}
allowMultiple={false}
onupdatefiles={setFile}
labelIdle='<span class="filepond--label-action">Browse
One</span>'
/>
</div>
</center>
</div>
          

        </div>
        <button
          type="submit"
          className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
        >
          Create Product
        </button>
      </form>
    </section>
  );
};

export default NewProduct;