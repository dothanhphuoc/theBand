const buyBtns = document.querySelectorAll ('.place-content button')
        const modalOpen = document.querySelector(".modal");
        const modalClose = modalOpen.querySelector(".modal-close");
        [...buyBtns].forEach((item) => {
            item.addEventListener("click", function(e) {
                modalOpen.classList.add("open")
             })
        })
        modalClose.addEventListener("click", function() {
            modalOpen.classList.remove("open")
        })
        document.body.addEventListener("click", function(e) {
            if(e.target.matches(".modal")) {
                 modalOpen.classList.remove("open")
             }
        })


        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight

        // Đóng mở mobile menu
        mobileMenu.onclick = function(){
            var isClose = header.clientHeight === headerHeight;
            if (isClose){
                header.style.height = 'auto';
            }
            else {
                header.style.height = null;
            }
        }

        // Tự động đóng khi chọn vào menu 
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
        for (var i = 0; i < menuItems.length; i++){
            var menuItem = menuItems[i];     
        //nextElementSibling: anh chị em liền kề 
            menuItem.onclick = function(event) {
                var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');  
                // thí chính là thằng mình click vào 
                // &&: và
                /* !: phủ định ngược lại -> nếu không có PảnentMenu thì ẩn header.style.height */
                if (isParentMenu){      
                    event.preventDefault();
                } else {
                    header.style.height = null; 
                }
             }
        }