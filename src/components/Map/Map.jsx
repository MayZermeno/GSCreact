import React from 'react';
import "./Map.css";
import {RiWhatsappFill } from "react-icons/ri";






const Map = () => {
  return (
    <div className="contenedorseccionesmain">
      <div className="servicios text-center" id="servicios">
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <div style={{ width: '100%' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: 0, height: 0 }}>
                <div style={{ width: '100%' }}>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: 0, height: 0 }}>
                    <iframe
                      title="mapa mexico"
                      frameBorder="0"
                      width="1200"
                      height="675"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      src="https://view.genial.ly/644b2c87842d22001b9b38d7"
                      type="text/html"
                      allowScriptAccess="always"
                      allowFullScreen="true"
                      scrolling="yes"
                      allowNetworking="all"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <div className="informacion">
              <h3>Servicios</h3>
              <br />
              <p>
                Contáctanos y pregunta por nuestros servicios de transportación y lógistica de acuerdo a la zona donde te
                encuentras.
              </p>
              <div className="row">
                <div className="col-sm-12">
                  <div className=" d-flex align-items-center justify-content-between">
                  <a href="https://wa.me/3310109277" target="_blank">
                      <button type="button" className="btn zona bajio m-1">
                        ZONA BAJIO <RiWhatsappFill className='icono-fa'/>
                      </button>
                    </a>
                    <a href="https://wa.me/5536632889" target="_blank">
  <button type="button" className="btn zona metro  m-1">
    ZONA CENTRO <RiWhatsappFill className='icono-fa'/>
  </button>
</a>

                    <a href="https://wa.me/3313534112" target="_blank">
                      <button type="button" className="btn zona pacifico  m-1">
                        ZONA PACIFICO  <RiWhatsappFill className='icono-fa'/>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
