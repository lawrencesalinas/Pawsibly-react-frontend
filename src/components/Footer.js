import React from 'react';

function Footer() {
  return <div>
      <footer class="page-footer">
				<div class="container">
					<div class="row">
						<div class="col l6 s12">
							<h5 class="white-text">About</h5>
							<p class="grey-text text-lighten-4">We are three software developers who wanted to create an easy and reliable source
								for pet owners to find a caretaker when they're busy or traveling. </p>
						</div>
						<div class="col l4 offset-l2 s12">
							<h5 class="white-text">Contributors</h5>
							<ul>
								<li><a class="grey-text text-lighten-3" style={{ 'textDecoration': 'none' }} href="https://github.com/galyverasi">Galyver Asi</a></li>
								<li><a class="grey-text text-lighten-3" style={{ 'textDecoration': 'none' }} href="https://github.com/kellylarrea">Kelly Larrea</a></li>
								<li><a class="grey-text text-lighten-3" style={{ 'textDecoration': 'none' }} href="https://github.com/lawrencesalinas">Lawrence Salinas</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-copyright">
					<div class="container">
						© 2022 Pawsibly
						<a class="grey-text text-lighten-4 right" style={{ 'textDecoration': 'none' }} href="https://github.com/kellylarrea/pawsibly-react">Learn more on GitHub</a>
					</div>
				</div>
			</footer>
  </div>;
}

export default Footer;
