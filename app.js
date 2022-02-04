//get element

const modal = document.querySelector('.facebook-modal');
const apply = document.querySelector('#apply');
const close_btn = document.querySelector('#close-1');
const close_popup = document.querySelector('#close-2');
const alert_pop = document.querySelector('.modal-popup');
const edit = document.querySelector('#edit');
const discard = document.querySelector('#discard');

apply.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('active');
});
close_btn.addEventListener('click',function(){
   alert_pop.classList.add('on');
});
modal.addEventListener('click',function(e){

    if(e.target == this){
        modal.classList.remove('active');
    }
   
});
close_popup.addEventListener('click', function(){
    alert_pop.classList.remove('on');
})

discard.addEventListener('click', function(){
    alert_pop.classList.remove('on');
    modal.classList.remove('active');
    
})
edit.addEventListener('click',function(){
    alert_pop.classList.remove('on');
})


//modal design end
//accordion start


//get element

const acc_head = document.querySelectorAll('.accordion-header');
const arro = document.querySelectorAll('#arro');

acc_head.forEach(item =>{
    item.addEventListener('click', function(){
     item.classList.toggle('active');
    
     if(item.classList.contains('active')){
        item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px';
     }else{
        item.nextElementSibling.style.height = '0';
     };
   
    acc_head.forEach(data =>{
        if(data != this){
            data.classList.remove('active');
            data.nextElementSibling.style.height = '0';
        }else{

        }
    });
    });
});






