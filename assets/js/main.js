
// Get all the dropdown from document
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {

    if (dropDown.classList.contains('click-dropdown') === true) {
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();

            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                // Close the clicked dropdown
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');

            } else {
                // Close the opend dropdown
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }

    if (dropDown.classList.contains('hover-dropdown') === true) {
        dropDown.onmouseover = dropDown.onmouseout = dropdownHover;
        function dropdownHover(e) {
            if (e.type == 'mouseover') {
                // Close the opend dropdown
                closeDropdown();
                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }

        }
    }

};


// Listen to the doc click
window.addEventListener('click', function (e) {
    // Close the menu if click happen outside menu
    if (e.target.closest('.dropdown-container') === null) {
        // Close the opend dropdown
        closeDropdown();
    }
});


// Close the openend Dropdowns
function closeDropdown() {
    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
    document.querySelectorAll('.dropdown-container').forEach(function (container) {
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.classList.remove('dropdown-active');
    });
}

// close the dropdown on mouse out from the dropdown list
document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) {
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = closeDropdown;
});



const choose = document.getElementById('choose-all');
const item = document.querySelectorAll('.inventory-item');
if (choose && item){
    item.forEach(i => {
        i.addEventListener('click', function () {
            if (!i.classList.contains('outline')) {
                i.classList.add('outline')
            } else {
                i.classList.remove('outline');
            }
        })
    })
    
    choose.onclick = function click() {
        item.forEach(i => {
            if (!i.classList.contains('outline')) {
                i.classList.add('outline')
            } else {
                i.classList.remove('outline');
            }
        })
    }
}


const menuItem = document.querySelectorAll('.menu-item-gr');

menuItem.forEach(i =>{
    i.addEventListener('mouseover', function(){
        i.style.background = '#1AE9B7';
        i.classList.add('menu-item-hvr');
    })
    i.addEventListener('mouseout', function(){
        i.style.background = 'rgba(217, 217, 217, 0.2)'
        i.classList.remove('menu-item-hvr')
    })
})
const openBtn = document.querySelectorAll('.openbtn');
const closeBtn  = document.querySelectorAll('.closebtn');
const mainScreen = document.querySelectorAll('.main-screen-content')
// openBtn.forEach(i => {
//     i.addEventListener('click', function(){
//         i.style.opacity = '0'
//     })
// }) 

closeBtn.forEach(i => {
    i.addEventListener('click', function(){
        openBtn.style.opacity = '1'
        document.getElementById("chat").style.opacity = '0'
    })
})

    // var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    // console.log(scrollbar);

//modal-chat
    document.querySelector('.openbtn').addEventListener('click',function(){
        document.querySelector('.modal').style.visibility = 'visible'
        document.querySelector('.modal').style.opacity = '1';
    });
    document.querySelector('.closebtn').addEventListener('click',function(){
        document.querySelector('.modal').style.visibility = 'hidden'
      document.querySelector('#openmodal').style.opacity = '0';
    });
//modal leader board
    document.querySelector('.openbtn-lb').addEventListener('click',function(){
        document.querySelector('.modal-lb').style.visibility = 'visible'
        document.querySelector('.modal-lb').style.opacity = '1';
        // document.addEventListener('click',function(e){
        //     if(e.target.className != 'modal-lb'){
        //         document.querySelector('.modal-lb').style.visibility = 'hidden'
        //     document.querySelector('#modalLB').style.opacity = '0';
        //     }
        // })
    });
    document.querySelector('.closebtn-lb').addEventListener('click',function(){
        document.querySelector('.modal-lb').style.visibility = 'hidden'
      document.querySelector('#modalLB').style.opacity = '0';
    });


//coinflip match
document.querySelectorAll('.openbtn-cm').forEach(i => {
        i.addEventListener('click', function(){
            document.querySelector('.modal-cm').style.visibility = 'visible'
    document.querySelector('.modal-cm').style.opacity = '1';
        })
    }) 
document.querySelector('.closebtn-cm').addEventListener('click',function(){
    document.querySelector('.modal-cm').style.visibility = 'hidden'
  document.querySelector('#modalCM').style.opacity = '0';
});
// //modal tos agreement

//modal TOS
document.querySelector('.openbtn-tos').addEventListener('click',function(){
    document.querySelector('.modal-tos').style.visibility = 'visible'
    document.querySelector('.modal-tos').style.opacity = '1';
});
document.querySelector('.closebtn-tos').addEventListener('click',function(){
    document.querySelector('.modal-tos').style.visibility = 'hidden'
  document.querySelector('#modalTOS').style.opacity = '0';
});
//rps
document.querySelector('.openbtn-rps').addEventListener('click',function(){
    document.querySelector('.modal-rps').style.visibility = 'visible'
    document.querySelector('.modal-rps').style.opacity = '1';
});
document.querySelector('.closebtn-rps').addEventListener('click',function(){
    document.querySelector('.modal-rps').style.visibility = 'hidden'
  document.querySelector('#modalRPS').style.opacity = '0';
});
//modal FAQ
document.querySelector('.openbtn-q').addEventListener('click',function(){
    document.querySelector('.modal-q').style.visibility = 'visible'
    document.querySelector('.modal-q').style.opacity = '1';
});
document.querySelector('.closebtn-q').addEventListener('click',function(){
    document.querySelector('.modal-q').style.visibility = 'hidden'
  document.querySelector('#modalQ').style.opacity = '0';
});
//modal fair
document.querySelector('.openbtn-f').addEventListener('click',function(){
    document.querySelector('.modal-f').style.visibility = 'visible'
    document.querySelector('.modal-f').style.opacity = '1';
});
document.querySelector('.closebtn-f').addEventListener('click',function(){
    document.querySelector('.modal-f').style.visibility = 'hidden'
  document.querySelector('#modalF').style.opacity = '0';
});
document.querySelector('.modal-f-btn').addEventListener('click',function(){
    document.querySelector('.modal-f').style.visibility = 'hidden'
    
  document.querySelector('#modalF').style.opacity = '0';
});
//modal stats
document.querySelector('.openbtn-s').addEventListener('click',function(){
    document.querySelector('.modal-s').style.visibility = 'visible'
    document.querySelector('.modal-s').style.opacity = '1';
});
document.querySelector('.modal-s-btn').addEventListener('click',function(){
    document.querySelector('.modal-s').style.visibility = 'hidden'
    
  document.querySelector('#modalS').style.opacity = '0';
});
document.querySelector('.closebtn-s').addEventListener('click',function(){
    document.querySelector('.modal-s').style.visibility = 'hidden'
    
  document.querySelector('#modalS').style.opacity = '0';
});

//modal inventory
document.querySelector('.openbtn-in').addEventListener('click',function(){
    document.querySelector('.modal-in').style.visibility = 'visible'
    document.querySelector('.modal-in').style.opacity = '1';
});
document.querySelector('.closebtn-in').addEventListener('click',function(){
    document.querySelector('.modal-in').style.visibility = 'hidden'
  document.querySelector('#modalIn').style.opacity = '0';
});

//modal log in
document.querySelector('.openbtn-l').addEventListener('click',function(){
    document.querySelector('.modal-l').style.visibility = 'visible'
    document.querySelector('.modal-l').style.opacity = '1';
    document.querySelector('.modal-t').style.visibility = 'hidden'
  document.querySelector('#modalTos').style.opacity = '0';
});
document.querySelector('.closebtn-l').addEventListener('click',function(){
    document.querySelector('.modal-l').style.visibility = 'hidden'
  document.querySelector('#modalL').style.opacity = '0';
});

//modal-info
    document.querySelector('.openbtn-if').addEventListener('click',function(){
        document.querySelector('.modal-i').style.visibility = 'visible'
        document.querySelector('.modal-i').style.opacity = '1';


        var countDownDate = new Date(Date.now() + 12000).getTime();    
        var x = setInterval(function() {
        // Get todays date and time
        var now = new Date().getTime();     
        var distance = countDownDate - now;      
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Output the result in an element with id="demo"
        document.querySelector('.modal-if-btn').innerHTML = '00:' + seconds;
      
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.querySelector('.modal-if-btn').innerHTML = 'Continue';
          document.querySelector('.modal-if-btn').style.opacity = '1';
          document.querySelector('.modal-if-btn').style.cursor = 'pointer';
          document.querySelector('.modal-if-btn').addEventListener('click', function(){
            document.querySelector('.inventory-info__buttons').style.display = 'none'
            document.querySelector('.inventory-info-bot-container').style.display = 'block'

            // setTimeout(function(){
            //     document.querySelector('.inventory-info__buttons').style.display = 'none'
            // },10000)
            
            document.querySelector('.modal-i').style.visibility = 'hidden'
            document.querySelector('.modal-i').style.opacity = '0';
            
          })
          document.querySelector('.closebtn-i').addEventListener('click',function(){
            document.querySelector('.inventory-info__buttons').style.display = 'none'
            document.querySelector('.inventory-info-bot-container').style.display = 'block'
            document.querySelector('.modal-i').style.visibility = 'hidden'
          document.querySelector('#modalIf').style.opacity = '0';
    
        });
        }
      }, 1000);
    });
    document.querySelector('.inventory-info-bot-closebtn').addEventListener('click', function(){
        document.querySelector('.inventory-info-bot-container').style.display = 'none'
        document.querySelector('.inventory-info__buttons').style.display = 'flex'
    })

    document.querySelector('.modal-l-copy').addEventListener('click', function(){
        var copyText = document.getElementById('modal-l-input');
        copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
    })
const closeSidebar = document.querySelector('.sidebar-closebtn')
const openSidebar = document.querySelector('.header-sidebar-btn')

openSidebar.addEventListener('click', function() {
    document.querySelector(".header-sidebar").style.width = "250px";
  })
  closeSidebar.addEventListener('click',  function() {
    document.querySelector(".header-sidebar").style.width = "0";
  })


    