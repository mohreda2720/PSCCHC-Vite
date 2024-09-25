import './News.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import { useEffect, useRef } from 'react';
import $ from 'jquery';

const News = () => {
	const carouselRef = useRef(null);

	const newsData = [
		{
			title: "Port Said Container & Cargo Handling Co. succeeds in attracting (5) serv...",
			imageUrl: "https://pscchc.com/img/b.jpg",
			publishedAt: "3/30/2023 12:49:35 PM"
		},
		{
			title: "An Expected Positive Impact on The stock exchange after Listing of Port...",
			imageUrl: "https://m.gomhuriaonline.com/Upload/News/19-2-2024_15_11_59_GomhuriaOnline_241708348319.jpg",
			publishedAt: "12/8/2022 2:12:53 PM"
		},
		{
			title: "Continued and successful cooperation between ZIM Integrated Shipping Ser...",
			imageUrl: "https://theloadstar.com/wp-content/uploads/348526ab6c3a03d216e9d7a709c3685d-680x0-c-default.jpg",
			publishedAt: "5/17/2023 9:18:54 AM"
		},
		{
			title: "Port Said Container and Cargo Handling is offering 20% stake on the EGX",
			imageUrl: "http://www.egypttoday.com/siteimages/Larg/202306080441144114.jpg",
			publishedAt: "8/6/2023 2:41:54 PM"
		}

	];
	useEffect(() => {
		// Initialize the carousel
		if (carouselRef.current) {
			const carousel = new window.bootstrap.Carousel(carouselRef.current, {
				// Options if needed
			});
		}
	}, []);


	return (
		<div className="maincontainer">
			<h2 className="display-4 mb-4  text-center">PSCCHC News</h2>
			<div className="container">

				<div className="row">
					<div className="col-12 pb-5">

						<section className="row">

							<div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
								<div id="featured" className="carousel slide carousel" data-ride="carousel">

									<ol className="carousel-indicators top-indicator">
										<li data-target="#featured" data-slide-to="0" className="active"></li>
										<li data-target="#featured" data-slide-to="1"></li>
										<li data-target="#featured" data-slide-to="2"></li>
										<li data-target="#featured" data-slide-to="3"></li>
									</ol>


									<div className="carousel-inner">

										<div className="carousel-item active">
											<div className="card border-0 rounded-0 text-light overflow zoom">
												<div className="position-relative">

													<div className="ratio_left-cover-1 image-wrapper">
														<a href="">
															<img className="img-fluid w-100"
																src={newsData[0].imageUrl}
																alt={newsData[0].title} />
														</a>
													</div>
													<div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

														<a href="">
															<h2 className="h5 post-title text-white my-1">{newsData[0].title}</h2>
														</a>

														<div className="news-meta">
															<span className="news-date">{newsData[0].publishedAt}</span>
														</div>
													</div>
												</div>
											</div>
										</div>


										<div className="carousel-item" data-aos="fade-right" data-aos-delay>
											<div className="card border-0 rounded-0 text-light overflow zoom">
												<div className="position-relative">

													<div className="ratio_left-cover-1 image-wrapper">
														<a href="#">
															<img className="img-fluid w-100"
																src={newsData[1].imageUrl}
																alt="Bootstrap news theme" />
														</a>
													</div>
													<div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

														<a href="#">
															<h2 className="h5 post-title text-white my-1">{newsData[1].title}</h2>
														</a>

														<div className="news-meta">
															<span className="news-date">{newsData[1].publishedAt}</span>
														</div>
													</div>
												</div>
											</div>
										</div>


										<div className="carousel-item" data-aos="fade-left" data-aos-delay>
											<div className="card border-0 rounded-0 text-light overflow zoom">
												<div className="position-relative">

													<div className="ratio_left-cover-1 image-wrapper">
														<a href="#">
															<img className="img-fluid w-100"
																src={newsData[2].imageUrl}
																alt="Bootstrap blog template" />
														</a>
													</div>
													<div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

														<a href="#">
															<h2 className="h5 post-title text-white my-1">{newsData[2].title}</h2>
														</a>

														<div className="news-meta">
															<span className="news-date">{newsData[2].publishedAt}</span>
														</div>
													</div>
												</div>
											</div>
										</div>


										<div className="carousel-item">
											<div className="card border-0 rounded-0 text-light overflow zoom">
												<div className="position-relative">

													<div className="ratio_left-cover-1 image-wrapper">
														<a href="#">
															<img className="img-fluid w-100"
																src={newsData[3].imageUrl}
																alt="Bootstrap portal template" />
														</a>
													</div>
													<div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

														<a href="#">
															<h2 className="h5 post-title text-white my-1">{newsData[3].title}</h2>
														</a>

														<div className="news-meta">
															<span className="news-date">{newsData[3].publishedAt}</span>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>

								</div>


								<a className="carousel-control-prev" href="#featured" role="button" data-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next" href="#featured" role="button" data-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>

							<div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
								<div className="row">

									<div className="col-6 pb-1 pt-0 pr-1">
										<div className="card border-0 rounded-0 text-white overflow zoom">
											<div className="position-relative">

												<div className="ratio_right-cover-2 image-wrapper">
													<a href="#">
														<img className="img-fluid"
															src={newsData[0].imageUrl}
															alt={newsData[0].title} />
													</a>
												</div>
												<div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
													<a href="#">
														<h2 className="h6 text-white my-1">{newsData[0].title}</h2>
													</a>
												</div>
											</div>
										</div>
									</div>


									<div className="col-6 pb-1 pl-1 pt-0">
										<div className="card border-0 rounded-0 text-white overflow zoom">
											<div className="position-relative">

												<div className="ratio_right-cover-2 image-wrapper">
													<a href="#">
														<img className="img-fluid"
															src={newsData[1].imageUrl}
															alt={newsData[1].title} />
													</a>
												</div>
												<div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
													<a href="#">
														<h2 className="h6 text-white my-1">{newsData[1].title}</h2>
													</a>
												</div>
											</div>
										</div>
									</div>


									<div className="col-6 pb-1 pr-1 pt-1">
										<div className="card border-0 rounded-0 text-white overflow zoom">
											<div className="position-relative">

												<div className="ratio_right-cover-2 image-wrapper">
													<a href="#">
														<img className="img-fluid"
															src={newsData[2].imageUrl}
															alt={newsData[2].title} />
													</a>
												</div>
												<div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
													<a href="#">
														<h6 className="h6 text-white my-1">{newsData[2].title}</h6>
													</a>
												</div>
											</div>
										</div>
									</div>


									<div className="col-6 pb-1 pl-1 pt-1">
										<div className="card border-0 rounded-0 text-white overflow zoom">
											<div className="position-relative">

												<div className="ratio_right-cover-2 image-wrapper">
													<a href="#">
														<img className="img-fluid"
															src={newsData[3].imageUrl}
															alt={newsData[3].title} />
													</a>
												</div>
												<div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
													<a href="#">
														<h6 className="h6 text-white my-1 smaller-font" >{newsData[3].title}</h6>
													</a>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>

						</section>

					</div>
				</div>
			</div>

		</div>

	);
};

export default News;
