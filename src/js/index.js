(function () {
  window.onload = function () {
    var logo = $('logo')
    var team = $('team')
    var blog = $('blog')
    var star = $('star')
    var about = $('about')
    var team1 = $('section2')
    var about1 = $('section1')
    var home = $('section')
    var hohead = $('hohead')
    var nav = $('nav')
    var header = $('header')
    header.style.marginLeft = '-' + header.clientWidth / 2 + 'px'
    window.onresize = function () {
      header.style.marginLeft = '-' + header.clientWidth / 2 + 'px'
    }
    logo.onclick = function () {
      show(home)
      show(hohead)
      hide1(team1)
      hide1(about1)
    }
    team.onclick = function () {
      show(team1)
      hide1(hohead)
      hide1(about1)
      hide1(home)
    }
    about.onclick = function () {
      hide1(team1)
      hide1(hohead)
      show(about1)
      hide1(home)
    }
    document.body.onscroll = function () {
      fixedScroll()
    }
  }

  function fixedScroll () {
    console.log($('nav'))
    if (document.body.scrollTop > 80) {
      if (!$('nav').className.match('fixednav')) {
        $('nav').className += ' fixednav'
      }
      // if(document.getElementById('header').getElementsByClassName('nav')) {
      // $('header').removeChild(nav)
      // }
    } else {
      // console.log('no nav')
      if ($('nav').className.match('fixednav')) {
        $('nav').className -= ' fixednav'
        $('nav').className += ' nav'
      }
    }
  }

  function $ (x) {
    return document.getElementById(x)
  }

  function show (x) {
    x.style.display = 'block'
  }

  function hide1 (x) {
    x.style.display = 'none'
  }
})()
