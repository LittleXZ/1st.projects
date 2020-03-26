//快捷selector
var $ = function(select){
  return document.querySelector(select);
};
var $$ = function(select){
  return document.querySelectorAll(select);
};

//监听右上角图标，点击出现登录框
$('.user-icon').onclick = function(e){
  e.stopPropagation();
  //这里也要阻止冒泡到window
  $('.flip-modal').classList.add('show');
};

//点到flip-modal就阻止冒泡
$('.flip-modal').onclick = function(e){
  e.stopPropagation();
};
//点击空白处，登录框关闭，因为阻止事件冒泡，所以点到框里不会关闭
document.onclick = function(){
  $('.flip-modal').classList.remove('show');
};

//点击X关闭modal
$('.close').onclick = function(){
  $('.flip-modal').classList.remove('show');
};

//旋转注册和登录框
$('.flip-modal').addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.classList.contains('tag-login')){
    $('.flip-modal').classList.add('login');
    $('.flip-modal').classList.remove('register');
  }else if (e.target.classList.contains('tag-register')) {
    $('.flip-modal').classList.add('register');
    $('.flip-modal').classList.remove('login');
  }
});

//比如鼠标移到登录的标签上时，就给所有的登录标签加一个active展示下划线效果，同时删掉所有的注册的下划线。因为背面是隐藏的，所以也不影响
$('.flip-modal').addEventListener('mouseover', function(e){
  if(e.target.classList.contains('tag-login')){
    $$('.tag-login').forEach(function(s){
      s.classList.add('tag-active');
    });
    $$('.tag-register').forEach(function(s){
      s.classList.remove('tag-active');
    });
  }else if (e.target.classList.contains('tag-register')) {
    $$('.tag-register').forEach(function(s){
      s.classList.add('tag-active');
    });
    $$('.tag-login').forEach(function(s){
      s.classList.remove('tag-active');
    });
  }
});
//判断当前页面如果是注册页，则鼠标从登录标签移走以后，会自动把登录标签的下划线删掉，给注册标签添加一个下划线。反之亦然。
$('.flip-modal').addEventListener('mouseout', function(e){
  if(e.target.classList.contains('tag-register') && $('.flip-modal').classList.contains('login')){
    $$('.tag-login').forEach(function(s){
      s.classList.add('tag-active');
    });
    $$('.tag-register').forEach(function(s){
      s.classList.remove('tag-active');
    });
  }else if (e.target.classList.contains('tag-login') && $('.flip-modal').classList.contains('register')) {
    $$('.tag-register').forEach(function(s){
      s.classList.add('tag-active');
    });
    $$('.tag-login').forEach(function(s){
      s.classList.remove('tag-active');
    });
  }
});

//login
//给username匹配一个正则
var ckLgUsername = $('.input-box input[name=username]').onblur = function(){
  if(!(/^\w{3,8}$/).test($('.input-box input[name=username]').value)){
    $('.eroormsg').innerText = '用户名需输入3-8个字符，包括字母数字下划线';
    $('.login-username-pass').style.display = 'none';
    return false;
  }else{
    $('.eroormsg').innerText = '';
    $('.login-username-pass').style.display = 'block';
    return true;
  }
};
//给password匹配一个正则
var ckLgPassword = $('.input-box input[name=password]').onblur = function(){
  if(!(/^\w{6,10}$/).test($('.input-box input[name=password]').value)){
    $('.eroormsg').innerText = '密码需输入6-10个字符，包括字母数字下划线';
    $('.login-password-pass').style.display = 'none';
    return false;
  }else{
    $('.eroormsg').innerText = '';
    $('.login-password-pass').style.display = 'block';
    return true;
  }
};
//给submit设置
$('.login-modal form').addEventListener('submit', function(e){
  e.preventDefault();
  if(ckLgUsername() && ckLgPassword()){
    this.submit();
    console.log('123');
  }
});

//register
//给username匹配一个正则
var ckRgUsername = $('.input-box input[name=rgUsername]').onblur = function(){
  if(!(/^\w{3,8}$/).test($('.input-box input[name=rgUsername]').value)){
    $('.rgeroormsg').innerText = '用户名需输入3-8个字符，包括字母数字下划线';
    $('.register-username-pass').style.display = 'none';
    return false;
  }else{
    $('.eroormsg').innerText = '';
    $('.register-username-pass').style.display = 'block';
    return true;
  }
};
//给password匹配一个正则
var ckRgPassword = $('.input-box input[name=rgPassword]').onblur = function(){
  if(!(/^\w{6,10}$/).test($('.input-box input[name=rgPassword]').value)){
    $('.rgeroormsg').innerText = '密码需输入6-10个字符，包括字母数字下划线';
    $('.register-password-pass').style.display = 'none';
    return false;
  }else{
    $('.rgeroormsg').innerText = '';
    $('.register-password-pass').style.display = 'block';
    return true;
  }
};
//给password2匹配一个正则
var ckRgPassword2 = $('.input-box input[name=rgPassword2]').onblur = function(){
  if(($('.input-box input[name=rgPassword2]').value) !== $('.input-box input[name=rgPassword]').value){
    $('.rgeroormsg').innerText = '两次输入密码需要一致';
    $('.register-password2-pass').style.display = 'none';
    return false;
  }else{
    $('.eroormsg').innerText = '';
    $('.register-password2-pass').style.display = 'block';
    return true;
  }
};
//给submit设置
$('.register-modal form').addEventListener('submit', function(e){
  e.preventDefault();
  if(ckRgUsername() && ckRgPassword() && ckRgPassword2()){
    this.submit();
  }
});
