$(document).ready(function(){$('.hamburger').on('click',function(){$('.subcategories,.supportmenu').hide(visible);$('.menus').addClass('visible');$(this).hide();$('.close').show();});$('.close').on('click',function(){$('.subcategories,.supportmenu').show();$('.menus').removeClass('visible');$('.hamburger').show();$(this).hide();});$('.Search').on('click',function(){console.log('search Box opened');$('.subcategories').slideToggle();$('.subcategories').css('position','absolute');$('.subcategories').css('top','57px');$('.Header').css('height','57px');return false;});});
