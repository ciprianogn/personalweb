import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../site-content';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly navigation = siteConfig.navigation;
  readonly socialLinks = siteConfig.socialLinks;
  readonly siteName = siteConfig.siteName;
  readonly year = new Date().getFullYear();
  readonly email = siteConfig.email;
  readonly linkedinUrl = siteConfig.linkedinUrl;
  readonly githubUrl = siteConfig.githubUrl;
  readonly instagramUrl = 'https://www.instagram.com/ciprianogn/';
  readonly youtubeUrl = 'https://www.youtube.com/@ciprianogn';
  readonly cvPath = siteConfig.cvDownloadPath;
}
