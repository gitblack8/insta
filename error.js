document.addEventListener("DOMContentLoaded",
  function(e) {
    let profileEditButton = document.querySelector("#profile_info button")
    let userInfo = document.querySelector("#userInfo")
    let summary = document.querySelector("#summary")
    let changing = false


    profileEditButton.addEventListener("click",
      function(e) {
        if(changing) {
          let _userInfo = userInfo.querySelector("input").value
          let _summary = summary.querySelector("input").value
          

          userInfo.innerHTML = _userInfo
          summary.innerHTML = _summary

          e.target.textContent = "프로필 편집"
          changing = false

        } else {
          let _userInfo = userInfo.textContent
          let _summary = summary.textContent
          

          userInfo.innerHTML = "<input value=" + _userInfo + "></input>"
          summary.innerHTML = "<input value=" + _summary + "></input>"
          
          e.target.textContent = "프로필 편집 완료"
          changing = true

        }
      }
    )
  }

)