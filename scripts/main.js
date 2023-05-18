
document.addEventListener("DOMContentLoaded",()=>{
    const image_list = document.getElementById("image_list");
    const output = document.getElementById("output");
    const clear = document.getElementById("clear");
    const year = document.getElementById("year");

    const tbody = document.querySelector("#list tbody");
    


    image_list.innerHTML = "<option> Make a Selection </option>"

    images.forEach(image =>{
        let option = document.createElement("option")
        option.innerHTML = image.title
        option.value = image.name;
        image_list.appendChild(option);
    }); // end images for each

    function addRow(image){
        let row = tbody.insertRow (-1) // end of rows

        let cellYear = row.insertCell(0)
        cellYear.innerHTML = image.year;

        let cellTitle = row.insertCell(1)
        cellTitle.innerHTML = image.title;

        let fullPath = "images/" + image.name;

        let cellThumb = row.insertCell(2)
        cellThumb.innerHTML = `
        <a href = "${fullPath}" target = "_blank">
            <img src="${fullPath}" class="thumb">
        </a>
        `;
        }

    year.addEventListener("change", ()=>{
        tbody.innerHTML = "" // clear table rows
        let selectedYear = year.selectedOptions[0].value;
        images.filter(i => i.year == selectedYear).forEach(addRow); // its filtering through the selected year. the for each is to display the data

    }); // ^^how to display the data onto the row 

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
