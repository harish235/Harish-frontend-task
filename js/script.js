let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}

var swiper = new Swiper(".course-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".teachers-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 20,
   grabCursor:true,
   loop:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
});

let saveFile = () => {
  // Get the data from each element on the form.
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const course = document.getElementById("course");

  // This variable stores all the data.
  let data = "\r Name: " + name.value + " \r\n " + "email: " + email.value + " \r\n " + "number: " + number.value + " \r\n " + "course: " + course.value;
  console.log(data); //printing form data into the console
  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: "text/plain" });
  var filename = new Date();
  var month =new Date(); //months from 1-12
  month = month.getMonth();

  var day = new Date();
  var day = day.getUTCDate();

  var year = new Date();
  var year = year.getUTCFullYear();

  newdate = year + "/" + month + "/" + day;
  const sFileName = filename; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = new Date();

  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }

  newLink.click();
      emailjs.init("QjR_SPtEN5hWxUPhu");
      var templateParams = {
        from_name: email.value,
        to_name: "harish",
        message: "Thanks for contacting cit"
    };
    
    emailjs.send('service_f7bjt9a', 'template_d10p8n9', templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
};

