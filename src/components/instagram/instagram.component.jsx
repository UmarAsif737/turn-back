import { useEffect, useState } from "react";
import axios from "axios";
import "./instagram.styles.scss";

const Instagram = () => {
	const longLivedToken = import.meta.env.VITE_INSTAGRAM_TOKEN;
	const [posts, setPosts] = useState([]);

	const fetchInstagramPosts = async () => {
		const userId = "6521114397999561"; // Replace with your Instagram User ID
		try {
			const response = await axios.get(
				`https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,media_type,thumbnail_url,permalink&access_token=${longLivedToken}&limit=5`
			);
			setPosts(response.data.data);
		} catch (error) {
			console.error("Failed to fetch Instagram posts:", error);
		}
	};

	useEffect(() => {
		fetchInstagramPosts();
	}, []);

	return (
		<>
			<section id="instagram-section">
				<div id="instagram-container">
					<div id="instagram-text">
						<h3>
							Follow us{" "}
							<a
								href="https://www.instagram.com/turnbacktheblock/"
								target="_blank"
								rel="noopener noreferrer"
							>
								@turnbacktheblock
							</a>
						</h3>
						<div className="inline-line"></div>
					</div>
					<div id="instagram-feed">
						{posts.map((post, index) => (
							<div className="single-insta-post" key={index}>
								<a
									href={post.permalink}
									target="_blank"
									rel="noopener noreferrer"
									alt={post.caption}
								>
									{post.media_type === "IMAGE" && (
										<img src={post.media_url} alt={post.caption} />
									)}
									{post.media_type === "VIDEO" && (
										<img src={post.thumbnail_url} alt={post.caption} />
									)}
								</a>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Instagram;
