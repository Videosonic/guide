import 'bulma/css/bulma.min.css'
import '../scss/style.scss'


/* ====================================================================================================== */
// カスタムJS
/* ====================================================================================================== */

/* =================================================== */
// このjsファイル内共通で使うものの基本設定
/* =================================================== */
// ページのスラッグを取得する変数を定義
//const url = location.pathname;
// PC以上のメディアクエリを定義
//const mediaQuery = window.matchMedia("(min-width: 1140px)");
// ヘッダーを取得
const header = document.getElementById("js-header");

/* =================================================== */
// Smooth Scroll
/* =================================================== */
// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = anchor.getAttribute("href");
    if (href) {
      const target = document.getElementById(href.replace("#", ""));
      if (target && header) {
        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          header.clientHeight -
          150;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});


/* =================================================== */
// ヘッダーとナビゲーションに関する処理
/* =================================================== */
if (header) {
  const nav = document.getElementById("js-gnav");
  const headerBtn = document.getElementById("js-header-btn");
  const headerLogoBlack = document.getElementById("js-header-logo-black");
  const headerLogoWhite = document.getElementById("js-header-logo-white");
  const headerBtnBurger = document.getElementById("js-header-btn-burger");

  const navLinkItems = document.getElementsByClassName("l-gnav_linkItem");



  const navOpen = () => {
    if (headerLogoBlack && headerLogoWhite) {
      headerLogoBlack.classList.remove("is-active");
      headerLogoBlack.classList.add("is-hidden");
      headerLogoWhite.classList.remove("is-hidden");
      headerLogoWhite.classList.add("is-active");
    }

    if (nav) {
      nav.classList.add("is-active");
    }

    if (headerBtnBurger) {
      headerBtnBurger.classList.add("is-active");
    }
  };

  const navClose = () => {
    if (headerLogoBlack && headerLogoWhite) {
      headerLogoWhite.classList.remove("is-active");
      headerLogoWhite.classList.add("is-hidden");
      headerLogoBlack.classList.remove("is-hidden");
      headerLogoBlack.classList.add("is-active");
    }

    if (nav) {
      nav.classList.remove("is-active");
    }

    if (headerBtnBurger) {
      headerBtnBurger.classList.remove("is-active");
    }
  };

  if (headerBtn) {
    headerBtn.addEventListener("click", () => {
      headerBtn.classList.toggle("is-active");
      if (headerBtn.classList.contains("is-active")) {
        navOpen();
      } else {
        navClose();
      }
    });

    for (let i = 0; i < navLinkItems.length; i++) {
      let navLink = navLinkItems[i].getElementsByClassName("c-btn-underLine");
      navLink[0].addEventListener("click", () => {
        navClose();
        headerBtn.classList.remove("is-active");
      });
    }
  }
}