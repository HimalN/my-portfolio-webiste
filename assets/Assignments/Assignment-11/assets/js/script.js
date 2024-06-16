$('.professionalskills').css({display:'block'})
$('.education-qualification').css({display:'none'})
$('.experieenc').css({display:'none'})
$('.assignments').css({display:'none'})

$("#nav-skills").eq(0).on('click', ()=>{
    $('.professionalskills').css({display:'block'})
    $('.education-qualification').css({display:'none'})
    $('.experieenc').css({display:'none'})
    $('.assignments').css({display:'none'})
});
$("#mobile-skills").eq(0).on('click', ()=>{
    $('.professionalskills').css({display:'block'})
    $('.education-qualification').css({display:'none'})
    $('.experieenc').css({display:'none'})
    $('.assignments').css({display:'none'})
});
$("#nav-education").eq(0).on('click', ()=>{
    $('.education-qualification').css({display:'block'})
    $('.professionalskills').css({display:'none'})
    $('.experieenc').css({display:'none'})
    $('.assignments').css({display:'none'})
});
$("#mobile-education").eq(0).on('click', ()=>{
    $('.education-qualification').css({display:'block'})
    $('.professionalskills').css({display:'none'})
    $('.experieenc').css({display:'none'})
    $('.assignments').css({display:'none'})
});
$("#nav-experience").eq(0).on('click', ()=>{
    $('.experieenc').css({display:'block'})
    $('.education-qualification').css({display:'none'})
    $('.professionalskills').css({display:'none'})
    $('.assignments').css({display:'none'})
});
$("#mobile-experience").eq(0).on('click', ()=>{
    $('.experieenc').css({display:'block'})
    $('.education-qualification').css({display:'none'})
    $('.professionalskills').css({display:'none'})
    $('.assignments').css({display:'none'})
});

$("#nav-assignments").eq(0).on('click', ()=>{
    $('.assignments').css({display:'block'})
    $('.experieenc').css({display:'none'})
    $('.education-qualification').css({display:'none'})
    $('.professionalskills').css({display:'none'})
});
$("#mobile-assignments").eq(0).on('click', ()=>{
    $('.assignments').css({display:'block'})
    $('.experieenc').css({display:'none'})
    $('.education-qualification').css({display:'none'})
    $('.professionalskills').css({display:'none'})
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}