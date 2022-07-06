<template>
	<nav class="navbar has-shadow is-spaced is-light" role="navigation" aria-label="main navigation">
		<div class="container">
			<div class="navbar-brand">
				<a class="navbar-item" href="#">
					<img src="../assets/uw-logo-stepped-light.png">
				</a>

				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<!-- <a class="button is-outlined is-medium">
								<strong>Start</strong>
							</a> -->
							<router-link class="button is-medium is-primary" to="/reports/new">
								<strong>Start</strong>							
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>