import React from "react";
import { useGlobalState } from "../../../../Data/State";
import Select from "react-select";
import './BlockInfo.css'

export const BlockInfos = (props: any) => {
  const [createProduct] = useGlobalState("createProduct");

  const customStyles = {
    option: () => ({
      padding: 20,
    }),
    control: () => ({
      display: "flex",
      width: "100%",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };
  return (
    <>
      <div className={"block_infos"}>
        <Select
          className={"category_selection"}
          styles={customStyles}
          options={createProduct.options_categories}
          placeholder={"Категория"}
        />
        <Select
          className={"category_selection"}
          styles={customStyles}
          options={createProduct.options_subcategory}
          placeholder={"Подкатегория"}
        />

        <span className={"container_info"}>
          <div style={{ marginBottom: 24, marginTop: 24 }}>
            <svg
              width="100%"
              height="1"
              viewBox="0 0 964 1"
              fill="1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100%" height="1" fill="##E4E4E4" />
            </svg>
          </div>

          <h2 className={"block_infos__head"}>Информация о товаре</h2>
        </span>
        <div className={"block_add_photo"}>
          <h3 className={"name_info_head after-star"}>Заглавное фото </h3>
          <label className="custom-file-upload">
            <input
              type="file"
              id="input"
              placeholder={"Lj"}
              aria-label={"Добавить фото"}
            />
            <p>Добавить фото</p>
            <div className="plus">
              +
            </div>
          </label>

        </div>
        <div className={"block_name_product pt24"}>
          <span className="input-for-name">
            <h3 className={"name_info_head after-star"}>Название </h3>
            <input type="text" className="input-text" placeholder="Кровать" />
          </span>
          <span className="input-for-articul">
            <h3 className={"name_info_head after-star"}>Артикул </h3>
            <input type="text" className="input-text" placeholder="12345678" />
          </span>
        </div>
        <div className="block-num-product pt24">
          <span>
            <h3 className={"name_info_head after-star "}>Количество в наличии</h3>
            <input
              type="text"
              className="input-text"
              placeholder="0"
            />
          </span>
          <span>
            <h3 className={"name_info_head"}>Под заказ</h3>
            <input
              type="text"
              className="input-text"
              placeholder="0"
            />
          </span>
          <span>
            <h3 className={"name_info_head after-star"}>Цена</h3>
            <input
              type="text"
              className="input-text"
              placeholder="1 000"
            />
          </span>
          <span>
            <h3 className={"name_info_head"}>Скидка</h3>
            <input
              type="text"
              className="input-text"
              placeholder="0"
            />
          </span>
        </div>

        <div className="description pt24">
          <h3 className={"name_info_head after-star"}>Описание</h3>
          <div className="text-container">
            <div className="style-redact">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" width="28" height="28" rx="4" fill="#FF8103" />
                <path d="M17.2442 14C18.0096 13.3807 18.5 12.4341 18.5 11.375C18.5 9.51391 16.986 8 15.125 8H9.5V9.50001H10.25V18.5H9.5V20H15.125C16.9861 20 18.5 18.4861 18.5 16.625C18.5 15.5659 18.0096 14.6192 17.2442 14ZM15.125 18.5H11.75V14.75H15.125C16.1588 14.75 17 15.5912 17 16.625C17 17.6588 16.1588 18.5 15.125 18.5ZM15.125 13.25H11.75V9.50001H15.125C16.1588 9.50001 17 10.3412 17 11.375C17 12.4088 16.1588 13.25 15.125 13.25Z" fill="#FF8103" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" width="28" height="28" rx="4" fill="#FF8103" />
                <path d="M18.5 9.50001V8H14V9.50001H15.1127L11.2555 18.5H9.5V20H14V18.5H12.8873L16.7444 9.50001H18.5Z" fill="#FF8103" />
              </svg>

              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" width="28" height="28" rx="4" fill="#FF8103" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8H6.75H8.25H9V9H8.25V13.35H14.1843V9H13.4004V8H14.1843H15.71H16.4004V9H15.71V19H16.4004V20H15.71H14.1843H13.4004V19H14.1843V14.46H8.25V19H9V20H8.25H6.75H6V19H6.75V9H6V8Z" fill="#FF8103" />
                <path d="M22 20H18.0732V19.1846C19.206 18.2511 19.9756 17.5598 20.3821 17.1108C20.794 16.6558 21 16.2275 21 15.8257C21 15.5362 20.9024 15.3146 20.7073 15.161C20.5176 15.0015 20.2873 14.9217 20.0163 14.9217C19.4201 14.9217 18.9322 15.1581 18.5528 15.6307L18 14.9483C18.2331 14.6411 18.5257 14.4077 18.878 14.2482C19.2358 14.0827 19.6098 14 20 14C20.5528 14 21.019 14.1625 21.3984 14.4874C21.7778 14.8124 21.9675 15.2585 21.9675 15.8257C21.9675 16.3338 21.7724 16.839 21.3821 17.3412C20.9919 17.8434 20.3957 18.4254 19.5935 19.0871H22V20Z" fill="#FF8103" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" width="28" height="28" rx="4" fill="#FF8103" />
                <path d="M12.9747 17.1459L11.5607 18.5599C10.9745 19.1461 10.0251 19.1461 9.43941 18.56C8.85356 17.9741 8.85356 17.0247 9.43929 16.439L12.2678 13.6105C12.8535 13.0247 13.803 13.0247 14.3887 13.6105C14.584 13.8057 14.9006 13.8057 15.0958 13.6105C15.2911 13.4152 15.2911 13.0986 15.0958 12.9033C14.1195 11.9271 12.537 11.9271 11.5607 12.9033L8.7322 15.7318C7.75593 16.7081 7.75593 18.2907 8.7322 19.267C9.70836 20.2437 11.2911 20.2437 12.2678 19.267L13.6819 17.8529C13.8771 17.6577 13.8771 17.3411 13.6819 17.1458C13.4866 16.9506 13.17 16.9506 12.9747 17.1459Z" fill="#FF8103" />
                <path d="M19.2676 8.73171C18.2913 7.75544 16.7082 7.75544 15.7319 8.73171L14.0354 10.4282C13.8402 10.6235 13.8402 10.9401 14.0354 11.1353C14.2307 11.3306 14.5473 11.3306 14.7425 11.1353L16.439 9.43883C17.0248 8.85307 17.9747 8.85307 18.5604 9.43883C19.1462 10.0246 19.1462 10.974 18.5604 11.5597L15.4494 14.6708C14.8637 15.2565 13.9143 15.2565 13.3285 14.6708C13.1333 14.4755 12.8167 14.4755 12.6214 14.6708C12.4262 14.866 12.4262 15.1826 12.6214 15.3779C13.5977 16.3541 15.1803 16.3541 16.1565 15.3779L19.2676 12.2669C20.2438 11.2906 20.2438 9.70798 19.2676 8.73171Z" fill="#FF8103" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" width="28" height="28" rx="4" fill="#FF8103" />
                <path d="M10.0793 13.0278H21.0004V14.9724H10.0793V13.0278Z" fill="#FF8103" />
                <path d="M10.0793 18.0554H21.0004V20H10.0793V18.0554Z" fill="#FF8103" />
                <path d="M10.0793 8H21.0004V9.94461H10.0793V8Z" fill="#FF8103" />
                <path d="M7 8H8.98566V9.94461H7V8Z" fill="#FF8103" />
                <path d="M7 13.0278H8.98566V14.9725H7V13.0278Z" fill="#FF8103" />
                <path d="M7 18.0554H8.98566V20H7V18.0554Z" fill="#FF8103" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" width="28" height="28" rx="4" fill="#FF8103" />
                <path d="M9.90625 13.3751H20.9963V15.2102H9.90625V13.3751Z" fill="#FF8103" />
                <path d="M9.90625 18.1196H20.9963V19.9547H9.90625V18.1196Z" fill="#FF8103" />
                <path d="M9.90625 8.63037H20.9963V10.4655H9.90625V8.63037Z" fill="#FF8103" />
                <path d="M8.3936 10.5178H7.95195V8.57377L7.5405 9.00031L7.28381 8.73231L8.00857 8H8.3936V10.5178Z" fill="#FF8103" />
                <path d="M8.85719 15.2362H7.03397V14.8889C7.55992 14.4913 7.91727 14.1969 8.10601 14.0056C8.29726 13.8119 8.39289 13.6294 8.39289 13.4583C8.39289 13.335 8.34759 13.2406 8.257 13.1752C8.16892 13.1072 8.06197 13.0733 7.93614 13.0733C7.65933 13.0733 7.43284 13.1739 7.25668 13.3752L7 13.0846C7.10821 12.9537 7.2441 12.8543 7.40768 12.7864C7.57377 12.7159 7.7474 12.6807 7.92859 12.6807C8.18528 12.6807 8.4017 12.7499 8.57785 12.8883C8.75401 13.0267 8.84209 13.2167 8.84209 13.4583C8.84209 13.6747 8.75149 13.8899 8.57031 14.1038C8.38912 14.3177 8.1123 14.5655 7.73986 14.8474H8.85719V15.2362Z" fill="#FF8103" />
                <path d="M7.95124 20C7.73734 20 7.54734 19.9622 7.38125 19.8867C7.21768 19.8112 7.09059 19.7131 7 19.5923L7.23781 19.3016C7.31834 19.3947 7.42152 19.469 7.54734 19.5243C7.67317 19.5797 7.80277 19.6074 7.93614 19.6074C8.09972 19.6074 8.22806 19.5734 8.32117 19.5055C8.41428 19.435 8.46084 19.3406 8.46084 19.2224C8.46084 18.9858 8.27461 18.8675 7.90217 18.8675C7.73356 18.8675 7.63668 18.8688 7.61151 18.8713V18.475C7.64171 18.4775 7.7386 18.4787 7.90217 18.4787C8.05819 18.4787 8.18276 18.4511 8.27587 18.3957C8.3715 18.3403 8.41931 18.2573 8.41931 18.1466C8.41931 18.0333 8.3715 17.9465 8.27587 17.8861C8.18025 17.8232 8.05819 17.7917 7.90972 17.7917C7.6631 17.7917 7.44668 17.8848 7.26046 18.0711L7.03397 17.7955C7.25794 17.5313 7.5637 17.3991 7.95124 17.3991C8.22554 17.3991 8.44574 17.4608 8.61183 17.5841C8.77792 17.7049 8.86096 17.8697 8.86096 18.0786C8.86096 18.2346 8.8056 18.3642 8.69487 18.4674C8.58666 18.5681 8.45958 18.631 8.31362 18.6561C8.45706 18.6687 8.59044 18.7291 8.71375 18.8373C8.83706 18.9455 8.89871 19.089 8.89871 19.2677C8.89871 19.4841 8.81189 19.6602 8.63825 19.7961C8.46713 19.932 8.23813 20 7.95124 20Z" fill="#FF8103" />
              </svg>


            </div>
            <div className="text">
              <textarea />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
