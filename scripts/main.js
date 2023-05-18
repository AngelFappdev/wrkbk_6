document.addEventListener("DOMContentLoaded",()=>{
    const image_list = document.getElementById("image_list")
    const output = document.getElementById("output")
    const clear = document.getElementById("clear")


    image_list.innerHTML = "<option> Make a Selection </option>"

    images.forEach(image =>{
        let option = document.createElement("option")
        option.innerHTML = image.title
        option.value = image.name;
        image_list.appendChild(option);
    }); // end images for each


    image_list.addEventListener("change", ()=>{ // ()=> is an anonyomus function that allows the change event to work
        if (image_list.selectedIndex <= 0){
            return ; //Do nothing
        }

        let name = image_list.selectedOptions[0].value;
        //alert(name);
        let img = document.createElement("img")
        img.src = "images/" + name;
        output.appendChild(img)

    }); // end of change image list 

    clear.addEventListener("click", ()=>{
        output.innerHTML = ""
        image_list.selectedIndex = 0;
    }) // end of clear click
});
