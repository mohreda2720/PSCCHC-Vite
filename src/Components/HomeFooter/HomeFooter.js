import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HomeFooter.css';
import mot_image from "../../assets/img/mot.png"

const HomeFooter = () => {
	return (
		<footer className="footer p-5">
			<Container>
				<Row className="mb-4 text-start">
					<Col xs={12} sm={6} md={3} className="text-start">
						<div className="h4">Follow us</div>
					</Col>
					<Col xs={12} sm={6} md={3} className="text-start">
						<span>&#9632;</span>
					</Col>
					<Col className="text-start">
						<p>
							Co. Subsidiary of "Holding Co. for Land & Maritime Transport "
							&nbsp;<img className='footer_images' src="http://pscchc.com/img/hcmlt_slogo.png" alt="logo" />&nbsp;
							&nbsp;<img className='footer_images' src={mot_image} alt="logo" />&nbsp;
						</p>
					</Col>
				</Row>

				<Row>
					<Col xs={12} sm={6} md={3} className="text-start">
						<h5>Navigation</h5>
						<ul className="list-unstyled">
							<li><a href="/" className="link-unstyled small-link">Home</a></li>
							<li><a href="/" className="link-unstyled small-link">About us</a></li>
							<li><a href="/" className="link-unstyled small-link">Servies</a></li>
							<li><a href="/" className="link-unstyled small-link">ANNUNCEMENTS &amp; Conditions</a></li>
							<li><a href="/" className="link-unstyled small-link">MEDIA ANS NEWS</a></li>
						</ul>
					</Col>
					<Col xs={12} sm={6} md={3} className="text-start">
						<h5>For Clients</h5>
						<ul className="list-unstyled">
							<li><a href="/" className="link-unstyled small-link">sign in</a></li>
							<li><a href="/" className="link-unstyled small-link">E-servies</a></li>
							<li><a href="/" className="link-unstyled small-link">Berth status</a></li>
							<li><a href="/" className="link-unstyled small-link">News</a></li>

						</ul>
					</Col>
					<Col xs={12} sm={6} md={3} className="ml-auto text-start ">
						<h5>Follow us </h5>
						<ul className="list-unstyled mt-3">
							<li>
								<a href="/" className="link-unstyled small-link">
									<img className='footer_images_small' src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" alt="logo" />
									&nbsp;&nbsp;Facebook
								</a>
							</li>
							<li>
								<a href="/" className="link-unstyled small-link">
									<img className='footer_images_small' src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713398400&semt=ais" alt="logo" />
									&nbsp;&nbsp;instagram
								</a>
							</li>
							<li>
								<a href="/" className="link-unstyled small-link">
									<img className='footer_images_small' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ544Tn_mYFXQ2K0FbpHtr5B1mgOR_slZNjagezQs_M3A&s" alt="logo" />
									&nbsp;&nbsp;whatsApp
								</a>
							</li>
							<li>
								<a href="/" className="link-unstyled small-link">
									<img className='footer_images_small' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdgFPAHFeTOt3AOG8dujqByOqxsCWW71MRqrdNJxFig&s" alt="logo" />
									&nbsp;&nbsp;phone
								</a>
							</li>
						</ul>
					</Col>
					<Col xs={12} sm={6} md={3} className="ml-auto text-start ">
						<h5>contact us </h5>
						<ul className="list-unstyled mt-3">
							<li>
								<a href="/" className="link-unstyled small-link">

									&nbsp;&nbsp;port said mostafa kamal
								</a>
							</li>
							<li>
								<a href="/" className="link-unstyled small-link">
									&nbsp;&nbsp;Freephone +1 800 559 6380
								</a>
							</li>
							<li>
								<a href="/" className="link-unstyled small-link">
									&nbsp;&nbsp;telephone +1 959 603 6035
								</a>
							</li>
							<li>
								<a href="/" className="link-unstyled small-link">
									&nbsp;&nbsp;Fax +1 800 559 6380
								</a>
							</li>
							<li>
								<a href="/" className="link-unstyled small-link" style={{ color: "red" }}>
									&nbsp;&nbsp;info@pscchc.com
								</a>
							</li>
						</ul>
					</Col>
				</Row>


			</Container>
		</footer>
	);
}

export default HomeFooter;
