const about_me = document.getElementById("about_me");
const about = document.getElementById("about");
function showAbout()
{
    about_me.style.display = "block";
}
function hideAbout()
{
    about_me.style.display = "none";
}
about_me.addEventListener("click", hideAbout);
// about.addEventListener("click", (event) =&gt; event.stopPropagation());

// const arr = ['qweff','htrgfh','vcxsd','werfsdvsfd','load average','asdasd','2r3fe','skfsmvrrivm', 'cat', 'git', 'zxc', 'asddw', '123', 'homework','fff','asdasd','linux', 'windows', 'qqqq','1233124','aboba'];
// const html = arr.map((item) => `<li >${item}</li>`).join('');
// document.querySelector('ul').innerHTML = html;