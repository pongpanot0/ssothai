import Image from "next/image";
import Button from "./Button";
import "animate.css";
const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-40 lg:bold-60 animate__animated animate__fadeIn animate__faster">
          ยินดีต้อนรับสู่ <br></br>เว็บไซต์สมาคมทางหลวงแห่งประเทศไทย
        </h1>
        <p className="text-ellipsis tracking-tight   regular-16 mt-6 text-gray-30 xl:max-w-[620px]">
          <span>
            สมาคมทางหลวงแห่งประเทศไทย
            ซึ่งเป็นหนึ่งในสมาชิกของสหพันธ์ทางหลวงนานาชาติ (International Road
            Federation) ได้ก่อตั้งขึ้นในปี พ.ศ. 2506 นับเป็นเวลากว่า 60 ปี
            แห่งการดำเนินงาน
            สมาคมทางหลวงจึงริเริ่มที่จะขยายช่องทางการสื่อสารแบบออนไลน์
            เพื่อใช้ในการนำเสนอข้อมูลอันเป็นประโยชน์ และเกี่ยวข้องกับสมาชิก
            นอกจากข้อมูลสำหรับการเดินทาง กิจกรรม โครงการก่อสร้างถนน ระบบคมนาคม
            เว็บไซต์ของเรายังได้รวบรวมเครื่องมือต่างๆ ที่จะสามารถใช้ตรวจสอบ
            และเตรียมตัวก่อนออกเดินทางไว้ให้สมาชิกอีกด้วย
            เราเชื่อมั่นว่าเว็บไซต์สมาคมทางหลวง
          </span>
          <span>
            {" "}
            จะสามารถช่วยให้การสื่อสารระหว่างสมาคมกับสมาชิกมีประสิทธิภาพมากยิ่งขึ้น
            การดำเนินงานในขั้นต่อไปของเรา ก็คือการจัดตั้ง “Online community”
            ซึ่งจะรวบรวม link ที่เกี่ยวกับทางหลวง ทั้งในประเทศและต่างประเทศ
            เพื่อให้ RATh เว็บไซต์ สามารถ เป็น“One Stop Service”
            ให้แก่สมาชิกได้ลองเข้ามาสัมผัสกับรูปแบบใหม่ของการให้ข้อมูลจากสมาคมทางหลวง
          </span>
        </p>
      </div>

      <div className="relative flex flex-1 items-start">
        <img
          alt="Map"
          className="transition duration-300 ease-in-out hover:scale-110"
          src="img_block_1HNY.png"
        />
      </div>
    </section>
  );
};

export default Hero;
