

export default function Appfooter()
{
    return (
        <footer class="footer" style={{color:"#fff"}}>
          <section class="bg-dark py-4 py-md-5 py-xl-8 border-top border-dark rounded">
            <div class="container overflow-hidden">
              <div class="row gy-4 gy-lg-0 justify-content-xl-between">
                <div class="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div class="widget">
                    <a href="#!">
                      <img
                        src="ficon.svg"
                        width="182.5"
                        height="203.13"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div class="widget">
                    <h4 class="widget-title mb-4">Payment Methods</h4>
                     <div className="form-check form-check-inline">
                      <img src={require("../assets/images/cc/master.png")} alt="" className="img-fluid" style={{width:"35px", height:"35px"}}/>{''}
                      <img src={require("../assets/images/cc/visa.png")} alt="" className="img-fluid" style={{width:"35px", height:"35px"}}/>{''}
                      <img src={require("../assets/images/cc/AMREXP.png")} alt="" className="img-fluid" style={{width:"35px", height:"35px"}}/>{''}
                      <img src={require("../assets/images/cc/discover.png")} alt="" className="img-fluid" style={{width:"35px", height:"35px"}}/>{''}
                     </div>
                  </div>
                </div>
                <div class="col-12 col-md-4 col-lg-3 col-xl-2">
                  <div class="row">
                    <h4 class=" mb-4">Our Site</h4>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <a href="#!" class="link-secondary text-decoration-none">Home</a>
                      </li>
                      <li class="mb-2">
                        <a href="#!" class="link-secondary text-decoration-none">FAQs</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-3 col-xl-4">
                  <div class="row">
                    <h4 class=" mb-4">About</h4>
                      <ul class="list-unstyled">
                        <li class="mb-2">
                          <a href="#!" class="link-secondary text-decoration-none">About Uplink Health Rx</a>
                        </li>
                        <li class="mb-2">
                          <a href="#!" class="link-secondary text-decoration-none">Terms and Conditions</a>
                        </li>
                        <li class="mb-2">
                          <a href="#!" class="link-secondary text-decoration-none">Privacy Policy</a>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        

        
        
        </footer>
    )
}
