import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import styles from "../../../styles/styles";

const Header = () => {
  return (
    <>

<div className={`${styles.section} flex pt-2 justify-between items-center`}>
      <div className="flex items-center justify-between w-full">
        <div>
          <Link to="/">
            <h2 className="text-[#000435] inline-flex font-bold text-[2rem]">
              MULTIVENDOR
            </h2>
          </Link>
        </div>

        <div className="w-full mx-[6rem]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product..."
              className="h-10 w-full px-3 border-[#000435] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={24}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#000080]"
            />
          </div>
        </div>

        <div className="flex">
          <div className={`${styles.noramlFlex} mr-3`}>
            <div className="relative cursor-pointer">
              <AiOutlineHeart size={30} color="#000" />
              <span className="absolute right-0 top-0 rounded-full bg-[#000080] w-4 h-4 p-0 m-0 text-white font-Poppins text-[12px] leading-tight text-center">
                0
              </span>
            </div>
          </div>

          <div className={`${styles.noramlFlex} mr-3`}>
            <div className="relative cursor-pointer">
              <AiOutlineShoppingCart size={30} color="#000" />
              <span className="absolute right-0 top-0 rounded-full bg-[#000080] w-4 h-4 p-0 m-0 text-white font-Poppins text-[12px] leading-tight text-center">
                0
              </span>
            </div>
          </div>

          <div className={`${styles.noramlFlex}`}>
            <div className="relative cursor-pointer">
              <CgProfile size={30} color="#000" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={`${styles.section} w-full `}>
      <div className="bg-[#000435] h-[4rem]">
        All Categories
      </div>
    </div>

    </>
  );
};

export default Header;
