import bot from "./assets/bot.png";
import vector from "./assets/vector.svg";
import chevron_right from "./assets/chevron_Right.svg";
import chevron_Gray from "./assets/chevron_Gray.svg";
import bag from "./assets/bag.jpg";
import slider from "./assets/slider.svg";
import "./App.css";
import checkSquare from "./assets/check_Square.svg";
import check_Gray from "./assets/check_gray.svg";
import chevron_white from "./assets/chevron_white.svg";
import paperClip from "./assets/paperClip.svg";
import logo from "./assets/logo.png";
function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className=" max-h-[800px] max-w-[360px]  bg-white rounded-3xl overflow-hidden ">
          <header className="max-h-20 rounded-t-3xl flex justify-between">
            <div className=" w-[191px] h-[60px] flex  mx-5 my-3 ">
              <div className=" h-[50px] w-[50px] rounded-full relative bg-white overflow-hidden">
                <img
                  src={bot}
                  alt="bot"
                  id="botImg"
                  className="object-contain h-[100%] "
                />
              </div>
              <div className="ellipse  relative"></div>
              <div className="   ">
                <div className="flex">
                  <p className=" Timpu font-semibold text-xl">Timpu</p>
                  <img src={vector} alt="checkBox" className=" h-4.5 ml-2" />
                </div>
                <div className=" ">
                  <p className="Timpu font-medium text-base">Chat assistant</p>
                </div>
              </div>
            </div>
            <div className="mx-5 mt-10 flex ">
              <div className="ellipses  relative top-2 mr-1  "></div>
              <p className=" font-normal Timpu text-sm">Online</p>
            </div>
          </header>

          <div className=" max-h-[100px] max-w-[360px] bg-white flex-col mt-12  ml-5">
            <div className=" h-[80px] w-[250px] chatFirst rounded-xl ">
              <div className="h-[60px] w-[220px] ">
                <p className=" text-sm">
                  Hi Sam! I am your personal shopping assistant, how can i{" "}
                  <br /> help you today ?
                </p>
              </div>
            </div>
            <p className=" text-xs pl-2 pt-2">4:45 PM</p>
          </div>

          <div className=" max-h-[80px] max-w-[330px] flex-col float-right mt-5 mr-5 ">
            <div className="h-[60px] w-[213px] chatSecond rounded-xl   ">
              <p className=" text-sm">
                I am looking for a hand bag, with long strap.
              </p>
            </div>
            <p className="text-xs float-right pt-2 pr-2">4:46 PM</p>
          </div>

          <div className="h-[60px] w-[330px] mt-28 ">
            <p className="popBags text-sm mx-5 font-normal">
              Popular tags for handbag
            </p>
            <div className="flex float-start overflow-hidden">
              <p className=" clutch font-medium  border ml-5 mr-2 mt-2 ">
                {" "}
                Clutch
              </p>
              <p className="faBric font-medium border mr-2 mt-2 ">
                Fabric lining
              </p>
              <p className="bagGit font-medium border mr-2 mt-2">Baggit</p>
              <p className="multiComp font-medium border  mt-2">
                Multi Compartment
              </p>
              <div className="  h-8 w-12 absolute bg-white arrow">
                <img src={chevron_right} alt="chevron_right" className=" " />
              </div>
            </div>
          </div>

          <div className=" bg-white">
            <div className="chatThird max-h-[141px] max-w-[250px] ml-5 rounded-xl mt-5 py-1">
              <div className="max-h-[71px] w-[230px] flex  bg-white rounded-md  mt-2  ">
                <img
                  src={bag}
                  alt="bag"
                  className="  h-[50px] rounded w-[70px] m-2"
                />
                <div>
                  <div className=" flex pl-2">
                    <p className=" font-medium text-sm mt-2">
                      {" "}
                      Bags on <span className=" font-semibold">
                        Timpu{" "}
                      </span>{" "}
                    </p>
                    <img src={vector} alt=" check" className=" mt-3 ml-2 h-4" />
                  </div>
                  <div className="flex">
                    <p className="products pl-2 pt-2">1123 products</p>
                    <img
                      src={chevron_Gray}
                      alt=" right arrow"
                      className="arrow_left  h-4 w-4"
                    />
                  </div>
                </div>
              </div>
              <div className=" h-12 w-[230px]">
                <p className=" font-normal text-sm pl-1 py-1">
                  Or set filter and help us choose the best bag for you.
                </p>
              </div>
            </div>
            <p className="text-xs pl-7 pt-2">4:48 PM</p>
          </div>

          <div className="max-w-[330px] h-[88px]">
            <div className="h-[20px] flex justify-between mt-3 ml-5 ">
              <p className="select_Filter">Select filters</p>
              <div className="flex">
                <img src={slider} alt="Slider" className=" w-5 h-5" />
                <p className="only_Filter">Filter</p>
              </div>
            </div>
            <div className="max-h-[58px] flex  flex-wrap mt-2 ">
              <div className=" strab_All long flex  ml-4 border max-w-[120px] py-[2px] px-[10px]  ">
                <p className="strap">Strap - Long</p>
                <img
                  className="mt-1 ml-[7px]  h-[12px] w-[11px]"
                  src={checkSquare}
                  alt="check"
                />
              </div>
              <div className=" colour_all long flex  ml-4 border max-w-[120px] py-[2px] px-[10px] ">
                <p className="colour">Colour</p>
                <img
                  className="mt-1 ml-[7px] h-[12px] w-[11px]"
                  src={check_Gray}
                  alt="check"
                />
              </div>
              <div className=" colour_all long flex  ml-[14px] border max-w-[120px] py-[2px] px-[10px]  ">
                <p className="colour">Size</p>
                <img
                  className="mt-1 ml-[7px] h-[12px] w-[11px]"
                  src={check_Gray}
                  alt="check"
                />
              </div>
              <div className=" colour_all long flex  ml-[14px] border max-w-[120px] mt-2 py-[2px] px-[10px]  ">
                <p className="colour">Brand</p>
                <img
                  className="mt-1 ml-[7px] h-[12px] w-[11px]"
                  src={check_Gray}
                  alt="check"
                />
              </div>
              <div className=" colour_all long flex  ml-[14px] border max-w-[120px] mt-2 py-[2px] px-[10px]  ">
                <p className="colour">Material</p>
                <img
                  className="mt-1 ml-[7px] h-[12px] w-[11px]"
                  src={check_Gray}
                  alt="check"
                />
              </div>
            </div>
          </div>

          <div className="messageBar flex flex-row-reverse mt-8 max-h-[40px]">
            <div className="h-[40px] w-[70px] search_Arrow pt-3 pl-5">
              <img
                src={chevron_white}
                alt=" cheveon white"
                className=" h-[17px] w-[9px] ml-3"
              />
            </div>
            <div className=" h-[40px] w-[243px] flex items-center">
              <input
                type="text  "
                placeholder="Type your message"
                className=" h-[22px]  rounded-xl  text-sm mt-2 pl-7 pr-14 py-4 ml-[-8px]"
              />
              <img
                src={paperClip}
                alt=" vector"
                className=" h-5 w-5 paperClip"
              />
            </div>
          </div>
          <div className="messageBar flex items-center justify-center pb-3 pt-2">
            <p className=" font-normal text-sm alpha">
              {" "}
              Powered by
              <span className=" font-semibold text-sm Krunk"> Krunk.ai</span>
            </p>
            <img src={logo} alt="" className="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
