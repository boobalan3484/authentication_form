const Social = () => {
    const socialList = [
      { platform: "facebook-f", url: "https://www.facebook.com/profile.php?id=61561349522345" },
      { platform: "twitter", url: "https://x.com/Mpeoples_" },
      // { platform: "linkedin", url: "#" },
      { platform: "fa-brands fa-instagram", url: "https://www.instagram.com/mpeoples_official/" },
      { platform: "fa-brands fa-youtube", url: "https://www.youtube.com/channel/UCWp_wGb83WWdY12ShZeNk2w" },
      { platform: "ffa-brands fa-linkedin-in", url: "https://www.linkedin.com/company/104539927/admin/dashboard/" },
    ];
    // <i class="fa-brands fa-linkedin-in"></i>
    return (
      <ul className="d-flex justify-content-center social-icon style-none">
        {socialList.map((social) => (
          <li key={social.platform}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${social.platform}`} />
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Social;
  