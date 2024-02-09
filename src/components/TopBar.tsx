"use client";
import { FC, useState } from "react";
import Avatar from "./Avatar";
import { HiChevronDown } from "react-icons/hi";

type TopBarProps = {
  title?: string;
  description?: string;
  image: string;
  size?: "md" | "lg" | "full";
  onLogout?: () => void;
};

/* eslint-disable no-unused-vars*/
enum TopBarSize {
  md = "w-[934px]",
  lg = "w-[1173px]",
  full = "w-full",
}

const TopBar: FC<TopBarProps> = ({
  title,
  description,
  image,
  size = "full",
  onLogout = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-undef
  // const getLocalUser = sessionStorage.getItem("user");
  // const user = getLocalUser ? JSON.parse(getLocalUser) : null;
  // const { usuario } = user || {};

  return (
    <div
      className={`${TopBarSize[size]} flex justify-between p-8 shadow-sm bg-[#F6F6FC]`}
    >
      <div>
        <h2 className="text-base font-bold leading-[24px]">{title}</h2>
        <p className="text-sm text-darkGray font-normal leading-[21px]">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-8">
        <div>
          <p className="font-medium text-[16px]">Home</p>
        </div>

        <div>
          <p className="font-medium text-[16px]">Login</p>
        </div>

        <div className="relative flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <Avatar type="image" src={image} size="md" />

            <HiChevronDown
              size={20}
              className={`transition duration-300 ${
                isOpen ? "-rotate-180" : ""
              } `}
            />
          </button>
          {/* {isOpen ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 14px",
                width: "auto",
                alignItems: "center",
              }}
              className={`z-10 text-xs absolute top-10 right-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
            >
              <div className="py-2">
                <Avatar type="image" src={image} size="md" />
              </div>
              <div
                className="py-1 flex flex-col"
                style={{ alignItems: "center" }}
              >
                <span className="py-1">
                  {usuario.nombre || ""} {usuario.apellido || ""}
                </span>
                <span className="py-1">{usuario.email || ""}</span>
              </div>

              <div className="py-1">
                <button
                  className="w-full block px-4 py-2 text-sm hover:bg-gray-100"
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
