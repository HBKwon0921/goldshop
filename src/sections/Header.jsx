import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const logo = (
  <svg viewBox="0 0 556 113" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M51.9442 19.5702C51.4496 19.3724 50.8562 19.0262 50.1638 18.5317C49.4715 18.0372 48.4824 17.5921 47.1966 17.1964C45.9108 16.7019 44.2788 16.3063 42.3006 16.0095C40.3225 15.7128 37.8003 15.6634 34.7341 15.8612V0.876586C39.0861 0.975494 43.4875 1.47004 47.9384 2.36021C52.4882 3.15148 56.1478 4.43728 58.9172 6.21763C58.3238 7.50344 57.6314 8.93761 56.8401 10.5201C56.0489 12.0038 55.3071 13.4379 54.6147 14.8226C53.9223 16.1085 53.3289 17.1964 52.8344 18.0866C52.3398 18.9768 52.0431 19.4713 51.9442 19.5702ZM0.759164 31.4392C0.759164 27.0873 1.50098 23.1804 2.9846 19.7186C4.46822 16.2568 6.44639 13.2401 8.91909 10.6685C11.4907 7.99798 14.458 5.92091 17.8208 4.43728C21.2826 2.85475 24.8928 1.81621 28.6513 1.32167V16.8997C25.4862 17.9877 22.8652 19.9164 20.7881 22.6859C18.711 25.3564 17.6725 28.0764 17.6725 30.8458C17.6725 34.7032 18.711 37.8188 20.7881 40.1926C22.8652 42.5664 25.4862 44.6435 28.6513 46.4238V63.3371C25.3873 61.7546 22.1233 60.0732 18.8594 58.2928C15.5954 56.4136 12.6282 54.2376 9.95763 51.7649C7.28711 49.2922 5.06167 46.4238 3.28132 43.1599C1.59988 39.8959 0.759164 35.989 0.759164 31.4392ZM3.13296 91.9711C4.51768 92.7623 6.24857 93.5536 8.32564 94.3449C10.5016 95.0372 12.7271 95.7296 15.002 96.422C17.2768 97.0154 19.5517 97.5099 21.8266 97.9056C24.1015 98.3012 26.228 98.499 28.2062 98.499H28.6513V112.593H28.3546C25.9808 112.593 23.5081 112.445 20.9364 112.148C18.4637 111.951 15.9416 111.555 13.37 110.961C10.7984 110.368 8.32564 109.577 5.95185 108.588C3.67696 107.5 1.69879 106.214 0.0173518 104.73L3.13296 91.9711ZM34.7341 49.3911C37.9981 50.8747 41.3115 52.4572 44.6744 54.1387C48.1362 55.8201 51.2518 57.8972 54.0213 60.3699C56.7907 62.7437 59.0656 65.6615 60.8459 69.1233C62.6263 72.5851 63.5164 76.8876 63.5164 82.0308C63.5164 85.5915 62.8241 89.0533 61.4394 92.4162C60.1536 95.779 58.2743 98.8452 55.8016 101.615C53.4278 104.285 50.4606 106.56 46.8999 108.439C43.3392 110.319 39.2839 111.555 34.7341 112.148V97.9056C42.8446 95.9274 46.8999 90.5369 46.8999 81.7341C46.8999 78.2723 45.7624 75.4039 43.4875 73.1291C41.2126 70.8542 38.2948 68.7276 34.7341 66.7495V49.3911Z"
      fill="#A18A68"
    />
    <path
      d="M165.59 2.65693V112H147.786V62.7437H106.542V50.578H147.786V2.65693H165.59ZM82.3585 2.65693H100.459V112H82.3585V2.65693ZM190.96 56.8092C190.96 48.0064 191.998 40.2421 194.075 33.5163C196.251 26.6916 199.219 20.955 202.977 16.3063C206.835 11.5587 211.335 7.94853 216.478 5.47582C221.72 2.90421 227.407 1.42058 233.54 1.02495V15.8612C230.177 16.2568 227.012 17.2954 224.045 18.9768C221.077 20.6582 218.506 23.1309 216.33 26.3949C214.154 29.6589 212.423 33.813 211.137 38.8574C209.851 43.9017 209.159 49.8856 209.06 56.8092C209.159 63.8317 209.851 69.8651 211.137 74.9094C212.423 79.8548 214.154 84.009 216.33 87.3718C218.605 90.7347 221.226 93.3063 224.193 95.0867C227.16 96.7681 230.276 97.7572 233.54 98.0539V112.742C227.506 112.346 221.869 110.912 216.626 108.439C211.384 105.868 206.835 102.258 202.977 97.6089C199.219 92.8613 196.251 87.0751 194.075 80.2505C191.998 73.4258 190.96 65.612 190.96 56.8092ZM239.474 1.02495C245.508 1.32167 251.096 2.75584 256.239 5.32746C261.481 7.89907 265.982 11.5587 269.74 16.3063C273.598 20.955 276.614 26.6916 278.79 33.5163C280.966 40.2421 282.054 48.0064 282.054 56.8092C282.054 65.612 280.966 73.4258 278.79 80.2505C276.614 87.0751 273.598 92.8613 269.74 97.6089C265.982 102.258 261.531 105.868 256.388 108.439C251.244 110.912 245.607 112.346 239.474 112.742V98.0539C242.837 97.6583 246.002 96.6198 248.969 94.9383C251.937 93.158 254.508 90.6358 256.684 87.3718C258.86 84.009 260.591 79.8548 261.877 74.9094C263.163 69.8651 263.855 63.8317 263.954 56.8092C263.855 49.7867 263.163 43.8028 261.877 38.8574C260.591 33.813 258.811 29.6589 256.536 26.3949C254.36 23.032 251.788 20.5099 248.821 18.8284C245.854 17.0481 242.738 16.0095 239.474 15.7128V1.02495ZM306.979 2.65693H324.783V112H306.979V2.65693ZM338.432 2.65693C343.081 2.65693 347.68 3.39875 352.23 4.88237C356.779 6.36599 360.835 8.59143 364.395 11.5587C368.055 14.5259 370.973 18.1361 373.149 22.3891C375.424 26.5433 376.561 31.2414 376.561 36.4836C376.561 42.0224 375.621 47.0667 373.742 51.6165C371.863 56.0674 369.242 59.8259 365.879 62.8921C362.516 65.9582 358.461 68.332 353.713 70.0134C348.966 71.6949 343.724 72.5356 337.987 72.5356H330.865V59.4797H341.102C343.278 59.4797 345.405 59.1335 347.482 58.4412C349.658 57.6499 351.636 56.4136 353.417 54.7321C355.197 53.0507 356.631 50.7263 357.719 47.7591C358.807 44.6929 359.351 40.9344 359.351 36.4836C359.351 34.7032 359.104 32.6756 358.609 30.4007C358.115 28.0269 357.076 25.8015 355.494 23.7244C354.01 21.5484 351.883 19.7681 349.114 18.3833C346.345 16.8997 342.685 16.1579 338.135 16.1579H330.865V2.65693H338.432ZM396.738 2.65693H414.542V112H396.738V2.65693ZM428.191 2.65693C432.84 2.65693 437.439 3.39875 441.989 4.88237C446.539 6.36599 450.594 8.59143 454.155 11.5587C457.814 14.5259 460.732 18.1361 462.908 22.3891C465.183 26.5433 466.32 31.2414 466.32 36.4836C466.32 42.0224 465.381 47.0667 463.501 51.6165C461.622 56.0674 459.001 59.8259 455.638 62.8921C452.275 65.9582 448.22 68.332 443.472 70.0134C438.725 71.6949 433.483 72.5356 427.746 72.5356H420.625V59.4797H430.862C433.038 59.4797 435.164 59.1335 437.241 58.4412C439.417 57.6499 441.395 56.4136 443.176 54.7321C444.956 53.0507 446.39 50.7263 447.478 47.7591C448.566 44.6929 449.11 40.9344 449.11 36.4836C449.11 34.7032 448.863 32.6756 448.368 30.4007C447.874 28.0269 446.835 25.8015 445.253 23.7244C443.769 21.5484 441.643 19.7681 438.873 18.3833C436.104 16.8997 432.444 16.1579 427.894 16.1579H420.625V2.65693H428.191ZM487.091 2.65693H505.191V112H487.091V2.65693ZM550.887 62.7437H511.274V50.578H550.887V62.7437ZM511.274 98.499H555.486V112H511.274V98.499ZM555.486 2.65693V16.1579H511.274V2.65693H555.486Z"
      fill="black"
    />
  </svg>
);
const iconSearch = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="16"
    viewBox="0 0 512 512"
  >
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
  </svg>
);
const iconCart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="18"
    viewBox="0 0 576 512"
  >
    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
  </svg>
);
const iconUser = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="14"
    viewBox="0 0 448 512"
  >
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
  </svg>
);
const iconBar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="14"
    viewBox="0 0 448 512"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
  </svg>
);

export default function Header() {
  let navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  let openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="hd">
      <h1
        onClick={() => {
          navigate('/');
        }}
      >
        {logo}
      </h1>
      {/* <nav className={`gnb ${isOpen === true ? 'on' : ''}`}> */}
      <nav className={`gnb ${isOpen && 'on'}`}>
        <Link
          onClick={(e) => {
            e.preventDefault();
            navigate('/shop_list');
            setIsOpen(false);
          }}
        >
          Shop
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            navigate('/blog');
            setIsOpen(false);
          }}
        >
          Bolg
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            navigate('/our');
            setIsOpen(false);
          }}
        >
          Our story
        </Link>
      </nav>
      <div className={`person ${isOpen && 'on'}`}>
        <button
          onClick={() => {
            navigate('/search');
            setIsOpen(false);
          }}
        >
          {iconSearch}
        </button>
        <button
          onClick={() => {
            navigate('/cart');
            setIsOpen(false);
          }}
        >
          {iconCart}
        </button>
        <button
          onClick={() => {
            navigate('/mypage');
            setIsOpen(false);
          }}
        >
          {iconUser}
        </button>
      </div>
      <button className="ham" onClick={openMenu}>
        {iconBar}
      </button>
    </header>
  );
}
