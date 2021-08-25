import React from "react";
import SkillsDiv from "./SkillsDiv";

export const Skills = () => {
  const python_logo = "https://www.filepicker.io/api/file/BFMMlbcQvml9HSqXcvNp";
  const cpp_logo = "https://img.icons8.com/color/452/c-plus-plus-logo.png";
  const js_logo =
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
  const node_logo =
    "https://cdn.imgbin.com/1/18/9/imgbin-node-js-javascript-database-mongodb-native-MznsPpw43gVjLGaCqfjtzBLP8.jpg";
  const php_logo = "https://icon-library.com/images/php-icon/php-icon-8.jpg";
  const bash_logo =
    "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11100950.jpg";
  const html_logo =
    "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png";
  const css_logo =
    "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png";
  const sql_logo =
    "https://c8.alamy.com/comp/JMCJ7E/sql-database-icon-logo-design-ui-or-ux-app-white-inscription-with-JMCJ7E.jpg";
  const rest_logo =
    "https://i0.wp.com/restfulapi.net/wp-content/uploads/rest.png?ssl=1";
  const mysql_logo =
    "https://www.pngkey.com/png/full/269-2693201_mysql-logo-circle-png.png";
  const postgresql_logo =
    "https://www.kreaweb.be/wp-content/uploads/2021/03/postgresql.png";
  const mongo_logo =
    "https://w7.pngwing.com/pngs/241/983/png-transparent-mongodb-nosql-database-computer-icons-others-leaf-grass-fruit.png";
  const phpMyAdmin_logo =
    "https://user-images.githubusercontent.com/37474/96790597-72317780-13cd-11eb-9b33-fc6c6af6bcf0.png";
  const mongoose_logo =
    "https://www.dex8.com/assets/img/learn/dex8sdk/helpers/mongoose.png";
  const sqlite_logo =
    "https://www.esoftner.com/wp-content/uploads/2019/12/SQLite-Logo.png";
  const react_logo = "https://yogalayout.com/static/reactnative.4e03ea5d.png";
  const flask_logo =
    "https://www.kindpng.com/picc/m/300-3007310_transparent-flask-logo-hd-png-download.png";
  const express_logo =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--00h6CjGb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.maxrooted.com/panduan-membangun-rest-api-expressjs-mysql/cover.png";
  const ejs_logo =
    "data:image/png;base64,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";
  const jquery_logo =
    "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/jquery-512.png";
  const tensorflow_logo =
    "https://miro.medium.com/max/1000/1*eJWbxmatlWJCNuhJqXB_dw.png";
  const bootstrap_logo =
    "https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg";
  const tailwind_logo =
    "https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg";
  const github_logo =
    "https://github.githubassets.com/images/modules/logos_page/Octocat.png";
  const heroku_logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbieXfSf8oXIYg8hNUbn_ceS_B4Bj3hATko28MIsX8UvJmv493O4CgBRsn_MwPXXew2rU&usqp=CAU";
  const jupyter_notebook_logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png";
  const google_logo =
    "https://www.designbust.com/download/1039/png/google_logo_transparent512.png";
  const C_logo =
    "https://e7.pngegg.com/pngimages/724/306/png-clipart-c-logo-c-programming-language-icon-letter-c-blue-logo.png";
  const swift_logo = "https://developer.apple.com/swift/images/swift-og.png";
  //require('../../assets/images/jquery-logo.png');
  return (
    <div className=' h-screen w-screen'>
      <div className='relative ml-10 h-5/6 w-1/2'>
        <div className='flex flex-row'>
          <div className='mr-44'>
            <h1 className='text-left text-3xl mb-10 font-bold text-indigo-800'>
              Programming
            </h1>
            <SkillsDiv skill='Python3' image_link={python_logo} />
            <SkillsDiv skill='C++' image_link={cpp_logo} />
            <SkillsDiv skill='C' image_link={C_logo} />
            <SkillsDiv skill='JavaScript' image_link={js_logo} />
            <SkillsDiv skill='NodeJS' image_link={node_logo} />
            <SkillsDiv skill='PHP' image_link={php_logo} />
            <SkillsDiv skill='Swift' image_link={swift_logo} />
            <SkillsDiv skill='Bash' image_link={bash_logo} />
            <SkillsDiv skill='HTML' image_link={html_logo} />
            <SkillsDiv skill='CSS' image_link={css_logo} />
            <SkillsDiv skill='SQL' image_link={sql_logo} />
            <SkillsDiv skill='REST API' image_link={rest_logo} />
          </div>
          <div className='flex flex-col mr-44'>
            <h1 className='text-left mb-10 text-3xl font-bold text-indigo-800'>
              Database
            </h1>
            <SkillsDiv skill='MySQL' image_link={mysql_logo} />
            <SkillsDiv skill='PostgreSQL' image_link={postgresql_logo} />
            <SkillsDiv skill='PhpMyAdmin' image_link={phpMyAdmin_logo} />
            <SkillsDiv skill='MongoDB' image_link={mongo_logo} />
            <SkillsDiv skill='Mongoose' image_link={mongoose_logo} />
            <SkillsDiv skill='SQLite' image_link={sqlite_logo} />
            <div>
              <h1 className='text-left text-3xl mt-5 mb-10 font-bold text-indigo-800'>
                Launguages
              </h1>

              <h2 className='text-left text-lg text-white'>
                <span className='font-bold'>Gujarati:</span> Proficient in
                Speaking, Reading, and Writing
              </h2>
              <br />
              <h2 className='text-left text-lg text-white'>
                <span className='font-bold'>Hindi:</span> Proficient in
                Speaking, Reading, and Writing
              </h2>
            </div>
          </div>
          <div>
            <h1 className='text-left text-3xl mb-10 font-bold text-indigo-800'>
              Frameworks/Services
            </h1>

            <SkillsDiv skill='React.Js' image_link={react_logo} />
            <SkillsDiv skill='Flask' image_link={flask_logo} />
            <SkillsDiv skill='Express.Js' image_link={express_logo} />
            <SkillsDiv skill='EJS' image_link={ejs_logo} />
            <SkillsDiv skill='JQuery' image_link={jquery_logo} />
            <SkillsDiv skill='TensorFlow' image_link={tensorflow_logo} />
            <SkillsDiv skill='Bootstrap' image_link={bootstrap_logo} />
            <SkillsDiv skill='TailwindCSS' image_link={tailwind_logo} />
            <SkillsDiv skill='Git/GitHub' image_link={github_logo} />
            <SkillsDiv skill='Heroku' image_link={heroku_logo} />
            <SkillsDiv
              skill='Jupyter Notebook'
              image_link={jupyter_notebook_logo}
            />
            <SkillsDiv skill='GOOGLE' image_link={google_logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
