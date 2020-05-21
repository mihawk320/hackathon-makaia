import React from 'react';
import './style/CursoStyle.css'
import { directive } from '@babel/types';

class Cursos extends React.Component {
  render() {
    return (
      <div className='my-5'>

        <div className="container" id='cursos'>
          <div className="row mb-5">
            <div className="col-md-5 ">

              <div id="carouselExampleControls" className="carousel slide mb-4" data-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://hackernoon.com/hn-images/1*z-wBmvnov1dnLs7iU9tHzA.png" className="d-block carrusel_cursos" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block carrusel_cursos " alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="d-block carrusel_cursos " alt="..." />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>



            </div>

            <div className="col-md-7">
              <h1 className="text-center letra mb-3 px-4" id='frontend'>Línea 1: Desarrollo Web Frontend</h1>
              <p className="contenidos text-center mb-4 px-4">En este curso se formarán las competencias para realizar el maquetado de interfaces gráficas para aplicaciones web utilizando HTML-CSS, bootstrap, material design, haciendo énfasis en Javascript para lo que se utilizará la herramienta de ReactJS. Lo anterior se complementará con herramientas de testing.</p>
              <div className="row px-4">
                <div className="col-3 ">
                  <img src="https://5.imimg.com/data5/TI/NN/GLADMIN-54744791/html-and-html5-500x500.png" className="imagenservicio mx-auto" />
                </div>

                <div className="col-3">
                  <img src="https://i0.wp.com/ceef.net/wp-content/uploads/2016/03/css-logo.png?fit=500%2C500 " className="imagenservicio mx-auto" />
                </div>

                <div className="col-3">
                  <img src="https://techtatva.co/techtatva140717/wp-content/uploads/2018/09/js-logo.png" className="imagenservicio mx-auto" />
                </div>

                <div className="col-3">
                  <img src="https://miro.medium.com/max/1000/1*cPh7ujRIfcHAy4kW2ADGOw.png" className="imagenservicio mx-auto" />
                </div>


              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-5 ">


              <div id="backend" className="carousel slide mb-4 " data-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80" className="d-block carrusel_cursos " alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1533750204176-3b0d38e9ac1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="d-block carrusel_cursos " alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://as2.ftcdn.net/jpg/03/11/39/25/500_F_311392561_QpSv9eYLGEMfozrFVe5fHQxBV6NbPQLg.jpg" className="d-block carrusel_cursos " alt="..." />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#backend" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#backend" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>



            </div>

            <div className="col-md-7">
              <h1 className="text-center letra mb-3 px-4" id='backend'>Línea 2: Desarrollo Web Backend</h1>
              <p className="contenidos text-center mb-5 px-4">En este curso se formarán las competencias para programar funciones, procedimientos o aplicaciones que procesen información del lado del servidor, utilizando tecnologías como: NodeJS, MongoDB, GRAPHQL y Firebase.</p>
              <div className="row px-4">
                <div className="col-3 ">
                  <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" className="imagenservicio mx-auto" />
                </div>

                <div className="col-3">
                  <img src="https://serverdensity-wpengine.netdna-ssl.com/wp-content/uploads/2014/09/monitor-mongodb.png" className="imagenservicio mx-auto" />
                </div>

                <div className="col-3">
                  <img src="http://enntechnologies.in/assets/img/Courses/1555843640logo.png" className="imagenservicio mx-auto" />
                </div>

                <div className="col-3">
                  <img src="https://github.com/SchneiderInfosystems/FB4D/wiki/logoFB4D.png" className="imagenservicio mx-auto" />
                </div>


              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-5 ">


              <div id="realidad_virtual" className="carousel slide mb-3" data-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://i.blogs.es/09cbbb/realidad-virtual/1366_2000.jpg" className="d-block carrusel_cursos" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block carrusel_cursos " alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://as2.ftcdn.net/jpg/02/70/80/25/500_F_270802513_LbfjGrBfPdvVL6iGMt3jYnEDK2dxlWwx.jpg" className="d-block carrusel_cursos " alt="..." />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#realidad_virtual" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#realidad_virtual" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>



            </div>

            <div className="col-md-7">
              <h1 className="text-center letra mb-3 px-4" id='videojuegos'>Línea 3: Mecánicas de Videojuegos Realidad Virtual</h1>
              <p className="contenidos text-center mb-5 px-4">En este curso se formarán las competencias para el desarrollo de experiencias inmersivas para entornos de 3D, utilizando para esto la herramienta de Unity y programando para alguna de las tecnologías de visualización como Samsung Gear VR, Oculus Go, Microsoft Mixed Reality, HTC Vive u Oculus Rift.</p>
              <div className="row px-4">
                

                <div className="col-3">
                  <img src="https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67 " className="imagenservicio mx-auto" />
                </div>

                <div className="col-3">
                  <img src="https://www.amd.com/system/files/11340-oculus-logo-hero-vertical-447x362.png" className="imagenservicio mx-auto" />
                </div>

                <div className="col-3">
                  <img src="https://techtatva.co/techtatva140717/wp-content/uploads/2018/09/js-logo.png" className="imagenservicio mx-auto" />
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Cursos;