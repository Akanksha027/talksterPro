import React from "react";

function Main3() {
  return (
    <>
      <div className="main-content3">
        <div className="cont3 bg-slate-950 w-full h- ">
          <h1 className="text-4xl pt-7 font-bold">About Me</h1>
          <p className="box pt-11 pl-8 pr-8 ">
            Hi! I'm Akanksha, the creator of BU SPACE. I started this platform
            to provide a safe space for individuals to express themselves freely
            and anonymously. I want to create a community where everyone can
            share their thoughts and experiences without fear of judgment.{" "}
          </p>

          <p className=" pt-4 pl-8 pr-8">
            {" "}
            My agenda with BU SPACE is to encourage open dialogue, foster
            creativity, and empower voices that deserve to be heard. I believe
            in the power of words and the impact they can have on our lives.
          </p>

          <div className="py-10 ">
           <h2 className="text-3xl">Connect with Me:</h2> 
            <ul>
              <li className="py-2 text-2xl">GitHub</li>
              <li className="py-2 text-2xl">Linkedln</li>
              <li className="py-2 text-2xl">Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main3;
