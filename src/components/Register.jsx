import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import URL from 'constants/url';
const Register = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [saveIDFlag, setSaveIDFlag] = useState(false);
  const idCheckRef = useRef(null);

  const handleSaveIDFlag = () => {
    setSaveIDFlag(!saveIDFlag);
  };

  const handleFormSubmit = () => {
    if (userInfo.password !== userInfo.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 회원가입 API 호출 로직 추가
    const data = {
      id: userInfo.id,
      password: userInfo.password,
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
      address: userInfo.address
    };

    fetch(URL.REGISTER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result === "success") {
          alert("회원가입이 완료되었습니다.");
          window.location.href = "/login";
        } else {
          alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      });
  };

  const handleIdCheck = () => {
    // ID 중복확인 API 호출 로직 추가
    fetch(`${URL.REGISTER_API}?id=${userInfo.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result[0]) {
          alert("이미 사용중인 ID입니다.");
          return;
        }
        alert("사용 가능한 ID입니다.");
      })
      .catch((error) => {
        console.log(error);
        alert("ID 중복확인에 실패했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <div className="contentss" id="contentss">
      {/* <!-- 본문 --> */}
      <div className="Plogin">
        <div className="login_box">
          <form>
            <fieldset>
              <legend>회원가입</legend>
              <div className="group">
                <input
                  type="text"
                  title="아이디"
                  placeholder="아이디"
                  value={userInfo.id}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, id: e.target.value })
                  }
                />
				<br/>
                <button
                  type="button"
                  onClick={handleIdCheck}
                  ref={idCheckRef}
				  style={{width:'100px', height:'40px'}}
                >
					<p style={{fontSize:'15px', color:'white', marginTop:'-35px'}}>
					중복확인
					</p>
                 
                </button>
				<br/>
              </div>
              <div className="group">
                <input
                  type="password"
                  title="비밀번호"
                  placeholder="비밀번호"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
				<br/>
				<br/>
                <input
                  type="password"
                  title="비밀번호 확인"
                  placeholder="비밀번호 확인"
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      confirmPassword: e.target.value
                    })
                  }
                />
              </div>
			  <br/>
              <div className="group">
                <input
                  type="text"
                  title="이름"
                  placeholder="이름"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                />
              </div>
			  <br/>
              <div className="group">
                <input
                  type="text"
                  title="이메일"
                  placeholder="이메일"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
              </div>
			  <br/>
              <div className="group">
                <input
                  type="text"
                  title="전화번호"
                  placeholder="전화번호"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                />
              </div>
			  <br/>
              <div className="group">
                <input
                  type="text"
                  title="주소"
                  placeholder="주소"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, address: e.target.value })
                  }
                />
              </div>
			  <br/>
              {/* <div className="chk">
                <label className="f_chk" htmlFor="saveid">
                  <input
                    type="checkbox"
                    id="saveid"
                    onChange={handleSaveIDFlag}
                    checked={saveIDFlag}
                  />{" "}
                  <em>ID저장</em>
                </label>
              </div> */}
              <button type="button" style={{marginTop:'490px', width:'600px', height:'60px', marginLeft:'-390px'}} onClick={handleFormSubmit}>
                <span style={{marginTop:'-50px'}}>회원가입</span>
              </button>
            </fieldset>
          </form>
        </div>

        <ul className="list">
          <li>
            비밀번호는 6~12자의 영문 대/소문자, 숫자, 특수문자를 혼합해서
            사용하실 수 있습니다.
          </li>
          <li>
            쉬운 비밀번호나 자주 쓰는 사이트의 비밀번호가 같을 경우, 도용되기
            쉬우므로 주기적으로 변경하셔서 사용하는 것이 좋습니다.
          </li>
        </ul>
      </div>
      {/* <!--// 본문 --> */}
    </div>
  );
};

export default Register;