// ==UserScript==
// @name         cPanel old icons
// @namespace    https://github.com/simkoG/cpanel-old/
// @version      1.0.3
// @description  Replace the cPanel's jupiter theme icons with the old paper_lantern icons.
// @author       simkoG
// @match        *://*/*frontend/jupiter*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cpanel.net
// @resource     ICON_SPRITEMAP_CSS https://raw.githubusercontent.com/simkoG/cpanel-old/main/icon_spritemap.css
// @resource     ICON_SPRITEMAP_SVG https://raw.githubusercontent.com/simkoG/cpanel-old/main/icon_spritemap.svg
// @resource     ICON_SPRITEMAP_SVG_ALT https://raw.githubusercontent.com/simkoG/cpanel-old/main/icon_spritemap_alt.png
// @resource     ICON_SPRITEMAP_PNG https://raw.githubusercontent.com/simkoG/cpanel-old/main/icon_spritemap.png
// @grant        GM_getResourceURL
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/simkoG/cpanel-old/main/cpanel-old-icons.user.js
// @downloadURL  https://raw.githubusercontent.com/simkoG/cpanel-old/main/cpanel-old-icons.user.js
// @supportURL   https://github.com/simkoG/cpanel-old/issues
// ==/UserScript==

(function() {
    'use strict';

    // Tampermonkey have a bug, which prvent SVGs from load.
    // https://github.com/Tampermonkey/tampermonkey/issues/1592
    const icon_spritemap_svg = GM_getResourceURL( "ICON_SPRITEMAP_SVG" );
    // const icon_spritemap_svg = GM_getResourceURL( "ICON_SPRITEMAP_SVG_ALT" );
    GM_addStyle( `

    .icon-addon_domains, .icon-address_importer, .icon-aliases, .icon-analog_stats, .icon-anonymous_ftp, .icon-apache_handlers, .icon-apache_spam_assassin, .icon-api_shell, .icon-api_tokens, .icon-application_manager, .icon-archive, .icon-authentication, .icon-autoresponders, .icon-awstats, .icon-backup, .icon-backup_wizard, .icon-bandwidth, .icon-boxtrapper, .icon-calendar_and_contacts, .icon-canary, .icon-change_language, .icon-change_password, .icon-change_style, .icon-clam_av, .icon-contact_information, .icon-cpanel-site-monitor, .icon-cpu_and_concurrent_connection_usage, .icon-cron_jobs, .icon-default_address, .icon-directory_privacy, .icon-disk_usage, .icon-domains, .icon-dynamic_dns, .icon-email_accounts, .icon-email_deliverability, .icon-email_disk_usage, .icon-email_filters, .icon-email_routing, .icon-encryption, .icon-error_pages, .icon-errors, .icon-file_and_directory_restoration, .icon-file_manager, .icon-forwarders, .icon-ftp_accounts, .icon-ftp_connections, .icon-global_email_filters, .icon-greylisting, .icon-hotlink_protection, .icon-images, .icon-indexes, .icon-ip_blocker, .icon-leech_protection, .icon-lvewpos, .icon-mailing_lists, .icon-manage_calendar_access, .icon-metrics_editor, .icon-mime_types, .icon-mod_security, .icon-multiphp_ini_editor, .icon-multiphp_manager, .icon-mysql_database_wizard, .icon-mysql_databases, .icon-mysql_manager, .icon-optimize_website, .icon-perl_modules, .icon-php, .icon-php_my_admin, .icon-php_pear_packages, .icon-php_pg_admin, .icon-postgresql_database_wizard, .icon-postgresql_databases, .icon-raw_access, .icon-redirects, .icon-remote_mysql, .icon-ruby_gems, .icon-ruby_on_rails, .icon-security_policy, .icon-site_publisher, .icon-site_software, .icon-solr_search_index, .icon-ssh_access, .icon-ssl_tls, .icon-subdomains, .icon-terminal, .icon-tls_status, .icon-tls_wizard, .icon-track_delivery, .icon-track_dns, .icon-two_factor_authentication, .icon-user_manager, .icon-version_control, .icon-visitors, .icon-web_disk, .icon-web_host_manager, .icon-webalizer, .icon-webalizer_ftp, .icon-zone_editor {
       background-image: url( "${icon_spritemap_svg}" ) !important;
     }

     `);

    const icon_spritemap_png = GM_getResourceURL( "ICON_SPRITEMAP_PNG" );
    GM_addStyle(`

    .icon-dynamic_dns_retro,/*.icon-group_advanced,.icon-group_databases,.icon-group_domains,.icon-group_email,.icon-group_files,.icon-group_metrics,.icon-group_security,.icon-group_software,*/.icon-imunify360,.icon-jetbackupcronbackups,.icon-jetbackupdbbackups,.icon-jetbackupdnsbackups,.icon-jetbackupemailbackups,.icon-jetbackupfilesbackups,.icon-jetbackupfullbackups,.icon-jetbackupgdpr,.icon-jetbackupqueue,.icon-jetbackupsettings,.icon-jetbackupsingle,.icon-jetbackupsnapshots,.icon-lvenodejssel,.icon-lvephpsel,.icon-lvepythonsel,.icon-lveresusage,.icon-lverubysel,.icon-multiphp_configuration,.icon-mx_entry,.icon-soft_div_icons,.icon-softaculous,.icon-ssl_management,.icon-ssl_storage,.icon-support,.icon-third_party_plugins,.icon-wp_softaculous {
       background-image: url( "${icon_spritemap_png}" ) !important;
    }

    `);

    const icon_spritemap_css = GM_getResourceText( "ICON_SPRITEMAP_CSS" );

    GM_addStyle( icon_spritemap_css );
})();
