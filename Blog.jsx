import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
	// Articles de blog fictifs
	const blogPosts = [
		{
			id: 1,
			title: "Les dernières tendances en développement web",
			date: "15 Juin 2023",
			summary:
				"Découvrez les technologies et frameworks qui dominent le marché du développement web en 2023.",
			image: "https://via.placeholder.com/300x200",
			author: "Jean Dupont",
		},
		{
			id: 2,
			title: "Comment optimiser votre site pour le SEO",
			date: "2 Mai 2023",
			summary:
				"Apprenez les meilleures pratiques pour améliorer le référencement de votre site web et augmenter sa visibilité.",
			image: "https://via.placeholder.com/300x200",
			author: "Marie Martin",
		},
		{
			id: 3,
			title: "L'importance de l'expérience utilisateur",
			date: "18 Avril 2023",
			summary:
				"Pourquoi l'UX est devenue un facteur déterminant dans le succès des applications web modernes.",
			image: "https://via.placeholder.com/300x200",
			author: "Sophie Leclerc",
		},
		{
			id: 4,
			title: "Sécurité web : les bonnes pratiques",
			date: "5 Mars 2023",
			summary:
				"Protégez votre application web contre les menaces les plus courantes avec ces conseils de sécurité essentiels.",
			image: "https://via.placeholder.com/300x200",
			author: "Thomas Bernard",
		},
	];

	return (
		<div className="blog-page">
			<div className="blog-header">
				<Container>
					<h1>Notre Blog</h1>
					<p>
						Restez informé des dernières actualités et conseils dans notre
						domaine
					</p>
				</Container>
			</div>

			<Container className="blog-content">
				<Row>
					{blogPosts.map((post) => (
						<Col md={6} lg={4} className="mb-4" key={post.id}>
							<Card className="blog-card h-100">
								<Card.Img variant="top" src={post.image} />
								<Card.Body>
									<Card.Title>{post.title}</Card.Title>
									<div className="blog-meta">
										<span className="blog-date">{post.date}</span>
										<span className="blog-author">Par {post.author}</span>
									</div>
									<Card.Text>{post.summary}</Card.Text>
									<button className="blog-read-more">Lire la suite</button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>

				<div className="blog-newsletter">
					<h3>Abonnez-vous à notre newsletter</h3>
					<p>Recevez nos derniers articles directement dans votre boîte mail</p>
					<div className="newsletter-form">
						<input type="email" placeholder="Votre adresse email" />
						<button>S'abonner</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Blog;
