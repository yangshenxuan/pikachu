const string = `
.skin * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .skin::after,
  .skin::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
}
.skin {
  background: rgb(255,230,0);
  background: linear-gradient(0deg, rgba(255,230,0,1) 41%, rgba(255,230,0,1) 67%, rgba(253,195,45,1) 81%);
    position: relative;
    min-height:50vh;
  }
  #pikachu{
    border: pink solid 2px;
    transform: scale(65%);
  }
  .nose {
    border: 10px solid red;
    border-color: black transparent transparent;
    position: relative;
    width: 20px;
    left: 50%;
    top: 250px;
    margin-left: -10px;
    border-bottom: transparent;
  }
  .nose .yuan {
    background: #000;
    position: absolute;
    top: -16px;
    width: 20px;
    height: 6px;
    left: -10px;
    border-radius: 10px 10px 0px 0px;
  }
  .eye {
    width: 80px;
    height: 80px;
    border: #000 solid 3px;
    left: 50%;
    top: 190px;
    margin-left: -40px;
    position: absolute;
    border-radius: 50%;
    background: #2e2e2e;
  }
  .eye.left {
    transform: translateX(-200px);
  }
  .eye.right {
    transform: translateX(200px);
  }
  .eye::after {
    content: "";
    display: block;
    border: 3px solid #000;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    position: relative;
    left: 8px;
  }
  .mouth {
    width: 302px;
    position: relative;
    left: 50%;
    top: 270px;
    margin-left: -150px;
    height: 300px;
    overflow: hidden;
  }
  .mouth .lip.left {
    border: 4px solid black;
    width: 150px;
    height: 50px;
    border-radius: 0 0 0 80%;
    border-color: transparent transparent black black;
    transform: rotate(-20deg);
    background: #ffe600;
    position: absolute;
    top: -20px;
    left: 1px;
    z-index: 1;
  }
  .mouth .lip.right {
    border: 4px solid black;
    width: 150px;
    height: 50px;
    border-radius: 0 0 80% 0;
    border-color: transparent black black transparent;
    transform: rotate(20deg);
    position: absolute;
    left: 149px;
    top: -20px;
    background: #ffe600;
    z-index: 1;
  }
  .mouth .down {
    width: 260px;
    height: 1100px;
    border: 4px solid black;
    position: absolute;
    left: 20px;
    top: -806px;
    border-radius: 0% 0 100% 100%;
    overflow: hidden;
    background: #9b000a;
  }
  .mouth .down .yuan1 {
    width: 250px;
    height: 250px;
    position: absolute;
    bottom: -10px;
    border-radius: 48% 48% 0 0;
    background: #ff485f;
  }
  
  .face {
    border: 4px solid black;
    width: 120px;
    height: 120px;
    position: absolute;
    left: 50%;
    border-radius: 50%;
    margin-left: -60px;
    top: 340px;
    background: red;
  }
  .face.left {
    transform: translateX(-260px);
  }
  .face.right {
    transform: translateX(260px);
  }
  @keyframes wave {
    0% {
      transform: rotate(0);
    }
    33% {
      transform: rotate(15deg);
    }
    66% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
  }
  .face > img {
  }
  .face > img {
    transform: scale(180%);
    position: absolute;
    top: 70px;
    left: 95px;
    display: none;
  }
  .face.left .rotate {
    transform: scale(180%);
  }
  .face.left .rotate > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
    position: relative;
    top: 40px;
    left: 70px;
    display: none;
  }
  .face:hover > img {
    display: block;
  }
  .face.left:hover > .rotate > img {
    display: block;
  }

  `;
export default string;
