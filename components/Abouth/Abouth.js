import Image from "next/image";
import React from "react";
import InfoComp from "./Elements/elements";
import { AiFillMail, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import Social from "../HomePage/LeftSide/Social";
export default function Abouth() {
  let Selti = [
    {
      name: "Dijital Pazarlamanın Temelleri",
      plat: " Google Digital Garage",
      tarih: "06.2021",
      link: "",
    },
    {
      name: "Data Structures and Algorithms In Java",
      plat: "Udemy",
      tarih: "04.2020",
      link: "",
    },
    {
      name: "Doğal Dil İşleme A-Z™: (NLP)",
      plat: "Udemy",
      tarih: "06.2021",
      link: "",
    },
    {
      name: "Sıfırdan Flutter ile Android ve Ios Apps Development",
      plat: "Udemy",
      tarih: "06.2021",
      link: "",
    },
  ];

  return (
    <div className="p-4 pt-6">
      <div className="flex flex-col justify-start items-start mt-12">
        {/* Sağ Menü */}
        <div className="flex flex-col bg-white dark:bg-DarkV1 p-5 w-full items-center justify-center gap-y-4 ">
          <div className="relative w-[150px] h-[150px] rounded-full border-2 overflow-hidden">
            <Image
              src={"/profile.jpeg"}
              objectFit="cover"
              alt="Profile Picture"
              layout="fill"
            />
          </div>

          <div className="flex flex-col   justify-center items-center text-center">
            <h1 className="text-black dark:text-white text-lg font-medium">
              Kubilay Bozak
            </h1>
            <h2 className="text-sm text-ParagraphFont font-normal">
              Front-End Developer
            </h2>
            <div className="flex flex-col justify-start items-start mt-4 space-y-5">
              <div className="flex flex-row items-center justify-center space-x-4">
                <AiOutlineMail />
                <span className="text-[12px] md:text-[14px] lg:text-[16px]">
                  kubilaybozak@gmail.com
                </span>
              </div>
              <div className="flex flex-row items-center justify-center space-x-4">
                <AiOutlineHome />
                <span className="text-[12px] md:text-[14px] lg:text-[16px]">
                  İstanbul/Turkiye
                </span>
              </div>
              <Social />
            </div>
          </div>
          <a
            className="px-6  mt-4  py-2 rounded-sm bg-Yellow text-white font-bold text-sm lg:px-8 lg:py-3"
            href="/KUBİLAY BOZAK.pdf"
            download
          >
            Cv (pdf) indir
          </a>
        </div>

        {/*Kısa Bilgi*/}
        <InfoComp title={"Kısaca Ben"}>
          <p className="text-[12px] md:text-[14px] lg:text-[16px] dark:text-white text-black indent-4">
            İstanbul Medipol Üniversitesi Bilgisayar Mühendisliği bölümünde
            eğitimi aldım. Eğitim süresince gerek eğitim gördüğüm profesörlerden
            gerek online kaynaklardan faydalanarak gelişimimi sürdürdüm.
            Çağımızın getirileri ve teknolojide olan gelişmelerin ortak
            noktalarından birisi olan Bilgisayar Mühendisliği daima diğer
            sektörlerin birleşme noktası olmuştur ve olacaktır Bunun farkında
            olarak kendimi her zaman bu alanda sektörün gelişimlerine ayak
            uydurmak için gerek sosyal gerek teknik anlamda kendimi geliştirmeye
            çalıştım. Eğitim hayatımdan arta kalan zamanlarda araştırma, öz
            motivasyon, girişimcilik ve farklı yetenekler edinme noktasında
            kendimi geliştirdim. Özgeçmişimde de görebileceğiniz gibi farklı
            eğitimlerle ve uğraştığım hobilerim ile kendimi iş hayatına
            hazırladım. İstekli, özenli ve dikkatli çalışmanın mutlaka başarı
            ile sonuçlanacağının bilincindeyim Bu nedenle çalıştığım yada
            çalışacak olduğum bütün firmalara yeteneklerim ve çalışma disiplinim
            ile katkı sağlayabileceğim noktasında şüphem yok. Eğitim hayatım ve
            tecrübelerim doğrultusunda farklı insanlarla birlikte çalışma, bir
            takımda yer alma ve birlikte üretebilmeyi öğrenme fırsatım oldu. Bu
            nedenle takımınıza kolaylıkla adapte olacağımı düşünüyorum. İşini
            severek yapan ve detayları çok önemseyen biriyim. İnsan ilişkileri
            noktasında esnek olmanın bana verimlilik olarak geri döndüğünü
            sıklıkla tecrübe ettim. Yeni şeyler öğrenmeyi, yeteneklerimi
            geliştirmeyi çok önemsiyor, bu amaçla insan ilişkilerinin
            öğreticiliğinden faydalanmak gerektiğini düşünüyorum. Ekibimdeki
            insanlarla bilgi alışverişinde bulunmak benim için bu nedenle çok
            önemli. Ön yazımı okumaya ve CV mi incelemeye vakit ayırdığınız için
            teşekkür ederim.
          </p>
        </InfoComp>
        {/*eğitim*/}
        <InfoComp title={"Eğitim"}>
          <div className="flex flex-col">
            <ul className="text-[12px] md:text-[14px] lg:text-[16px] dark:text-white text-black pl-4 list-disc">
              <li>Samandıra Lisesi ,2016</li>{" "}
              <li>
                Bilgisayar Mühendisliği İstanbul Medipol Üniversitesi, 2022
              </li>
            </ul>
          </div>
        </InfoComp>
        {/*Proje*/}
        <InfoComp title={"Projelerim"}>
          <div className="pl-4">
            <ul className="list-disc text-[12px] md:text-[14px] lg:text-[16px] dark:text-white text-black pl-4 space-y-1">
              <span className="font-bold text-[12px] md:text-[13px] lg:text-[14px] -ml-4">
                Teknofest 2021
              </span>
              <li>Yeşil Enerji Teknolojisi </li>
              <li>
                Projenin amacı, oluşturulan mobil uygulama ile içerisinde yer
                alan sistemlerin insan yaşamını, sağlık ve akıllı şehirler
                noktasında birleştirmesidir. Bunların yanında bireylerin günlük
                olarak hane bazında su kullanım oranı, yürüyüş-adım sayıları,
                toplu taşıma ve bisiklet kullanım verileri ve geri dönüşüme
                katkıları yeşil puanlar üzerinden değerlendirilerek oluşturulan
                ödül sisteminde kullanılabilecektir.{" "}
              </li>
              <li>
                Projeye yönelik mobil yazılım düzenlemelerinden geliştirici ve
                yazılımdan sorumlu ekip üyesi olarak yer alındı.
              </li>
              <li>Proje flutter ile geliştirildi.</li>
            </ul>
          </div>

          <div className="pl-4 pt-3">
            <ul className="list-disc text-[12px] md:text-[14px] lg:text-[16px] dark:text-white text-black pl-4 space-y-1">
              <span className="font-bold text-[12px] md:text-[13px] lg:text-[14px] -ml-4">
                İstanbul Medipol Üniversitesi
              </span>
              <li>Mühendislik Projesi </li>
              <li>
                Projede, laboratuvar ortamında insan gözündeki kornea
                tabakasından elde edilen SHG görüntülerinde kolajen liflerinin
                morfolojik özelliklerini incelemek için , 2 boyutlu görüntüler
                üzerinde görüntü işleme teknikleri kullanarak doktorlar için
                hata payı olmadan ayrım yapmayı amaçlayan bir metot geliştirildi
                ve her bir birey için farklı katmanlar üzerinde uygulandı.
                Oluşturulan teoriye göre kolajen lifleri tespit edildi ve hasta
                yada sağlıklı ayrımı yapıldı.
              </li>
              <li>
                Proje için Python kullanıldı ( CV2,skimage,numpy gibi
                kütüphaneler ile proje desteklendi)
              </li>
            </ul>
          </div>

          <div className="pl-4 pt-3">
            <ul className="list-disc text-[12px] md:text-[14px] lg:text-[16px] dark:text-white text-black pl-4 space-y-1">
              <span className="font-bold text-[12px] md:text-[13px] lg:text-[14px] -ml-4">
                ALKANLAR ELEKTRİK
              </span>
              <li>E-Ticaret projesi (B2B & B2C ) </li>
              <li>
                Dijitalleşmeye başlayan şirket için E-ticaret B2B ve B2C
                işlemlerini yönetebilecekleri bu projede front-end geliştirici
                olarak tüm sorumlulukları üstlenildi.
              </li>
              <li>
                Proje henüz hayata geçmedi, NextJS(ReactJS) , Tailwind, Less
                ,Moduler CSS ,Ant-Design , GraphQL ve RestAPI kullanıldı.
              </li>
            </ul>
          </div>
        </InfoComp>
        {/*Deneyim*/}
        <InfoComp title={"Deneyimlerim"}>
          <div className="flex flex-col pt-3">
            <ul className="text-[12px] md:text-[14px] lg:text-[16px] dark:text-white text-black pl-4 list-disc">
              <li className="flex flex-col font-medium">
                Quala Networks Optimization (IT) , 2020
                <span className="text-[11px] md:text-[12px] font-normal lg:text-[13px] dark:text-white text-black pl-4 text-">
                  Staj Süresi̇nce Baz İstasyonlarinin Opti̇mi̇̇zasyonlari Yapi̇ldi
                  Şi̇̇rket İçi̇̇n Script Programlar Gelişti̇ri̇ldi.
                </span>
              </li>
              <li className="flex flex-col font-medium">
                Alkanlar Elektrik A.S.
                <span className="text-[11px] md:text-[12px] font-normal lg:text-[13px] dark:text-white text-black pl-4 text-">
                  E-Ticaret projesinin arayüzününün kodlanıp geliştirilmesini
                  sağladı.
                </span>
              </li>
            </ul>
          </div>
        </InfoComp>

        {/*Yetenekler*/}
        <InfoComp title={"Yetenekler"}>
          <div className="flex flex-col">
            <ul className="text-[12px] md:text-[14px] lg:text-[16px] dark:text-white text-black pl-4 list-disc">
              <li>Sorunlara Alternatif Çözümler Üretebilme</li>
              <li>Kullanıcı deneyimi hakkında fikirler üretme</li>
              <li>Sosyal Medya Yönetimi</li>
              <li>
                Windows macOS ve Ubuntu işletim sistemlerini iyi bir şekilde
                kullanma
              </li>
              <li>Yeni teknolojilere çok çabuk adapte olma</li>
              <li>Proje yönetimi fikirlerine hakim olma</li>
              <li>Ekip Çalışmasına Yatkın</li>
              <li>Organizasyon becerisine sahip</li>
            </ul>
          </div>
        </InfoComp>

        {/*Sertifikalar*/}
        <InfoComp title={"Sertifikalar"}>
          <div className="hidden md:flex">
            <table className="border-collapse table-fixed w-full text-sm">
              <thead className="text-start">
                <tr className="text-start">
                  <th className="text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white font-medium  text-black dark:text-white">
                    Kurs
                  </th>
                  <th className="text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white font-medium  text-black dark:text-white">
                    Platform
                  </th>
                  <th className="text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white font-medium  text-black dark:text-white">
                    Tarih
                  </th>
                  <th className=" text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white font-medium  text-black dark:text-white">
                    Sertifika
                  </th>
                </tr>
              </thead>
              <tbody>
                {Selti.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td className="text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white   text-black dark:text-white">
                        {item.name}
                      </td>
                      <td className="text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white   text-black dark:text-white">
                        {item.plat}
                      </td>
                      <td className="text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white   text-black dark:text-white">
                        {item.tarih}
                      </td>
                      <td className=" text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white   text-black dark:text-white">
                        <a className="text-Yellow" href={item.link}>
                          Sertifikayı gör
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="md:hidden">
            <table className="border-collapse table-fixed w-full text-sm">
              <thead className="text-start">
                <tr className="text-start">
                  <th className="text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white font-medium  text-black dark:text-white">
                    Kurs
                  </th>
                  <th className=" text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white font-medium  text-black dark:text-white">
                    Sertifika
                  </th>
                </tr>
              </thead>
              <tbody>
                {Selti.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td className="text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white  text-black dark:text-white">
                        {item.name}
                      </td>
                      <td className=" text-[12px] md:text-[14px] lg:text-[16px] text-start border-b dark:border-white   text-black dark:text-white">
                        <a className="text-Yellow" href={item.link}>
                          Sertifikayı gör
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </InfoComp>

        {/*Hobiler*/}
        <InfoComp title={"Hobiler"}>
          <div className="flex flex-col">
            <ul className="text-[12px] md:text-[14px] lg:text-[16px] dark:text-white text-black pl-4 list-disc">
              <li>Robotik projeler</li>
              <li>Video ve fotoğraf düzenleme</li>
              <li>Fotoğraf filtreleri oluşturma</li>
              <li>Doğa yürüyüşleri</li>
              <li>Motosporlar</li>
            </ul>
          </div>
        </InfoComp>

        {/*Hobiler*/}
        <InfoComp title={"GÖNÜLLÜ FAALİYETLER"}>
          <div className="flex flex-col">
            <ul className="text-[12px] md:text-[14px] lg:text-[16px] dark:text-white text-black pl-4 list-disc">
              <li>
                İstanbul Medipol Üniversitesi Genç Kızılay Kulüp Üyesi /
                2018-2019
              </li>
              <li>
                İstanbul Medipol Üniversitesi Genç Kızılay Kulüp Üyesi /
                2019-2020
              </li>
              <li>
                İstanbul Medipol Üniversitesi INSTITUTE OF ELECTRICAL AND
                ELECTRONICS ENGINEER / 2018-2019 İstanbul Medipol Üniversitesi
              </li>
              <li>
                INSTITUTE OF ELECTRICAL AND ELECTRONICS ENGINEER / 2019-2020
              </li>
            </ul>
          </div>
        </InfoComp>
      </div>
    </div>
  );
}
