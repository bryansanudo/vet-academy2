const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    " font-semibold md:text-4xl text-xl w-full dark:text-white text-black",
  heading3:
    "font-poppins font-semibold lg:text-[40px] text-[18px] sm:text-[24] md:text-[32px] text-white lg:leading-[76.8px] md:leading-[66.8px] w-full text-left",
  paragraph:
    "font-poppins font-normal  text-[18px] leading-[30.8px]  dark:text-dimWhite ",
  title: "font-semibold dark:text-white  text-[18px] leading-[23.4px] ",
  subtitle: "font-normal dark:text-dimWhite text-[16px] leading-[24px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  button:
    "mt-7 hover:scale-105 duration-700 text-white text-[16px] font-semibold flex bg-primary  py-3 px-5 rounded-lg",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  vercel: '${darkMode ? "shadow-md shadow-white" : "shadow-xl shadow-black"}',
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  titleText:
    "font-bold text-lg   py-3 text-transparent bg-clip-text  bg-gradient-to-r from-primary to-pink-700  md:text-xl ",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row gap-10 justify-between flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1  flex-col`,
};

export default styles;
