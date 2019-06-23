pureScriptTab = (selector1) => {
    var selector    = document.querySelectorAll(selector1);
    selector.forEach((el, index) => {        
        nav         = el.querySelectorAll(' nav'),        
        ul          = el.querySelectorAll('ul'),
        li          = el.querySelectorAll('li'),
        a           = el.querySelectorAll('a'),
        main        = el.querySelector('main');
        
        
        a.forEach((element, index) => { 

            element.style.cursor = 'pointer';            
            element.addEventListener('click', (event) => {                
                event.preventDefault();
                event.stopPropagation();

                var ul      = event.target.closest('nav'),
                    main    = ul.nextElementSibling,
                    item_a  = ul.querySelectorAll('a'),
                    section = main.querySelectorAll('section');
                
                item_a.forEach((ela, ind) => {                    
                    ela.classList.remove('tabItemActive');                    
                });                
                event.target.classList.add('tabItemActive');

               
                section.forEach((element1, index) => {
                    //console.log(element1);
                    element1.classList.remove('tabContentActive');
                });
                var target = event.target.target;                 
                document.getElementById(target).classList.add('tabContentActive');               
            });
        });
        
    });
    
};