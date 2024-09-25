import React from "react";
import "./BelieveUs.css";
import { useLanguage } from "../../LanguageContext.jsx";

export default function BelieveUs() {
  const { language } = useLanguage();

  return (
    <div
      className="container-fluid mx-auto mt-5 mb-5 col-12"
      id="WhyPscchc"
      style={{ textAlign: "center" }}
    >
       <header className="section-header my-5">
          <h3>{language === "en" ? "Why PSCCHC" : "لماذا شركة بورسعيد لتداول الحاويات"}</h3>
        </header>




      <div className="row" style={{ justifyContent: "center" }}>


        <div
          className="card BeliveCard col-md-3 col-12"
          style={{ borderBottomColor: "#008793" }}
        >
          <div className="card-content">
            <div className="card-body">
              <img
                className="img BeliveImg"
                src="images/contactus/GlobalCon33.png"
                height={"80px"}
                // width={"80px"}
                alt=""
              />
              <div className="card-title BeliveTitle">
                {language === "en" ? "Gateway to Global Trade " : "بوابة التجارة العالمية"}
              </div>
              <div className="card-subtitle mt-5 mb-3 ">
                <p className="JustfiedParagraph text-muted">
                  {language === "en"
                    ? " Choosing Us means relying on an advanced port serving over 100 countries worldwide, supported by state-of-the-art technologies and logistics services. We ensure precision and speed in handling containers and goods, contributing to efficiently achieving your business goals with confidence"
                    : "اختياركم لنا يعني الاعتماد على ميناء متطور يخدم أكثر من 100 دولة عبر العالم، مدعوم بأحدث التقنيات والخدمات اللوجيستية. نحن نضمن دقة وسرعة في التعامل مع الحاويات والبضائع، مما يسهم في تحقيق أهدافكم التجارية بكفاءة وثقة"}
                </p>
              </div>
            </div>
          </div>
        </div>





        <div
          className="card BeliveCard col-md-3 col-12 ms-2"
          style={{ borderBottomColor: "#008793" }}
        >
          <div className="card-content">
            <div className="card-body">
              <img
                className="img BeliveImg"
                src="images/contactus/EcoGrow2.png"
                width={"80px"}
                height={"80px"}
                alt=""
              />
              <div className="card-title BeliveTitle">
                {language === "en" ? "Support for Economic Growth " : "دعم النمو الاقتصادي "}
              </div>
              <div className="card-subtitle mt-5 mb-3 ">
                <p className="JustfiedParagraph text-muted">
                  {language === "en"
                    ? "PSCCHC is a backbone of the Egyptian economy, enhancing the competitive environment for industries and providing direct and indirect employment opportunities. We are committed to sustainable development and supporting local communities"
                    : "تعتبر شركة بورسعيد لتداول الحاويات والبضائع عموداً فقرياً للاقتصاد المصري، حيث تسهم في تعزيز البيئة التنافسية للصناعات وتوفير فرص العمل المباشرة وغير المباشرة. نحن نلتزم بالتنمية المستدامة ودعم المجتمعات المحلية"}
                </p>
              </div>
            </div>
          </div>
        </div>




        <div
          className="card BeliveCard col-md-3 col-12 ms-2"
          style={{ borderBottomColor: "#008793" }}
        >
          <div className="card-content">
            <div className="card-body">
              <img
                className="img BeliveImg"
                src="images/contactus/innovation2.png"
                width={"90px"}
                height={"90px"}
                alt=""
              />
              <div className="card-title BeliveTitle">
                {language === "en" ? "Leadership in Technology and Innovation" : "ريادة التكنولوجيا والابتكار"}
              </div>
              <div className="card-subtitle mt-5 mb-3 ">
                <p className="JustfiedParagraph text-muted">
                  {language === "en"
                    ? "PSCCHC contributes to Egypt's Vision 2030 by adopting cutting-edge technologies and digital solutions in our operations. We strive to improve performance efficiency and deliver integrated logistics services that meet your needs and exceed expectations"
                    : "تساهم شركة بورسعيد في رؤية مصر 2030 من خلال اعتماد أحدث التقنيات والحلول الرقمية في عملياتنا. نحن نسعى جاهدين لتحسين كفاءة الأداء وتقديم خدمات لوجستية متكاملة تلبي احتياجاتكم وتفوق توقعاتكم"}
                </p>
              </div>
            </div>
          </div>
        </div>











      </div>
    </div>
  );
}
