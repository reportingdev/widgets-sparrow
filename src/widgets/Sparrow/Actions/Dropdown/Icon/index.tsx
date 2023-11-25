import React, { SVGAttributes, FC } from 'react'
import './icon.css'

import IconActiveCampaignDisabled from './icons/active-campaign-disabled'
import IconActiveCampaignPlain from './icons/active-campaign-plain'
import IconActiveCampaign from './icons/active-campaign'
import IconActiveCampaignOutline from './icons/active-campaign-outline'
import IconAnalytics from './icons/analytics'
import IconAngry from './icons/angry'
import IconAPI from './icons/api'
import IconArrow from './icons/arrow'
import IconArrowClock from './icons/arrow-clock'
import IconArrowLeft from './icons/arrow-left'
import IconArrowRight from './icons/arrow-right'
import IconBadge from './icons/badge'
import IconBar from './icons/bar'
import IconBigCommerceDisabled from './icons/big-commerce-disabled'
import IconBigCommercePlain from './icons/big-commerce-plain'
import IconBigCommerce from './icons/big-commerce'
import IconBigCommerceOutline from './icons/big-commerce-outline'
import IconBilling from './icons/billing'
import IconBingAdsDisabled from './icons/bing-ads-disabled'
import IconBingAdsPlain from './icons/bing-ads-plain'
import IconBingAds from './icons/bing-ads'
import IconBingAdsOutline from './icons/bing-ads-outline'
import IconBook from './icons/book'
import IconBounce from './icons/bounce'
import IconBronzeStar from './icons/bronze-star'
import IconBrush from './icons/brush'
import IconCanva from './icons/canva'
import IconCalendar from './icons/calendar'
import IconCamera from './icons/camera'
import IconChart from './icons/chart'
import IconCheck from './icons/single-check'
import IconCheckmark from './icons/checkmark'
import IconClicks from './icons/clicks'
import IconClose from './icons/close'
import IconComments from './icons/comments'
import IconCompetition from './icons/competition'
import IconCompetitive from './icons/competitive'
import IconConstantContactDisabled from './icons/constant-contact-disabled'
import IconConstantContactPlain from './icons/constant-contact-plain'
import IconConstantContact from './icons/constant-contact'
import IconConstantContactOutline from './icons/constant-contact-outline'
import IconCopy from './icons/copy'
import IconCreateReport from './icons/create-report'
import IconCreditCard from './icons/credit-card'
import IconCrown from './icons/crown'
import IconCustomer from './icons/customer'
import IconCustomTemplate from './icons/custom-template'
import IconCircularDatasource from './icons/circular-datasource'
import IconCircularDatasourceLarge from './icons/circle-datasource-large'
import IconCircularGreenTick from './icons/circular-green-tick'
import IconCircularPlay from './icons/circular-play'
import IconCircularRefresh from './icons/circular-refresh'
import IconCsv from './icons/csv'
import IconCsvPlain from './icons/csv-plain'
import IconCsvOutline from './icons/csv-outline'
import IconCSV from './icons/csv-v2'
import IconCube from './icons/cube'
import IconDanger from './icons/danger'
import IconDash from './icons/dash'
import IconDrag from './icons/drag'
import IconDashboard from './icons/dashboard'
import IconDashboardV2 from './icons/dashboard-v2'
import IconDatabase from './icons/database'
import IconDatasources from './icons/datasources'
import IconDataStudio from './icons/dataStudio'
import IconDateDropdown from './icons/date-dropdown'
import IconDefaultAvatar from './icons/default-avatar'
import IconDefaultClient from './icons/default-client'
import IconDefaultImage from './icons/default-image'
import IconDefaultMetrics from './icons/default-metrics'
import IconDocument from './icons/document'
import IconDollar from './icons/dollar'
import IconDownload from './icons/download'
import IconEdit from './icons/edit'
import IconEmail from './icons/email'
import IconEmbed from './icons/embed'
import IconEmbedCode from './icons/embed-code'
import IconEmpty from './icons/empty'
import IconEngagement from './icons/engagement'
import IconEqual from './icons/equal'
import IconFacebookPlain from './icons/facebook-plain'
import IconFacebook from './icons/facebook'
import IconFacebookOutline from './icons/facebook-outline'
import IconFacebookAdsPlain from './icons/facebook-ads-plain'
import IconFacebookAds from './icons/facebook-ads'
import IconFacebookAdsOutline from './icons/facebook-ads-outline'
import IconFlodesk from './icons/flodesk'
import IconFlodeskPlain from './icons/flodesk-plain'
import IconFlodeskOutline from './icons/flodesk-outline'
import IconFlodeskDisabled from './icons/flodesk-disabled'
import IconFilter from './icons/filter'
import IconFolder from './icons/folder'
import IconFollowers from './icons/followers'
import IconGoldStar from './icons/gold-star'
import IconGoogle from './icons/google'
import IconGoogleAdsPlain from './icons/google-ads-plain'
import IconGoogleAds from './icons/google-ads'
import IconGoogleAdsOutline from './icons/google-ads-outline'
import IconGoogleAnalyticsPlain from './icons/google-analytics-plain'
import IconGoogleAnalytics from './icons/google-analytics'
import IconGoogleAnalyticsOutline from './icons/google-analytics-outline'
import IconGoogleDoc from './icons/googleDocs'
import IconGoogleDrive from './icons/google-drive'
import IconGoogleMyBusinessDisabled from './icons/google-my-business-disabled'
import IconGoogleMyBusinessPlain from './icons/google-my-business-plain'
import IconGoogleMyBusiness from './icons/google-my-business'
import IconGoogleMyBusinessOutline from './icons/google-my-business-outline'
import IconGreaterThan from './icons/greater-than'
import IconGrid from './icons/grid'
import IconHappy from './icons/happy'
import IconHeavyPlus from './icons/heavy-plus'
import IconHome from './icons/home'
import IconHubspotDisabled from './icons/hubspot-disabled'
import IconHubspotPlain from './icons/hubspot-plain'
import IconHubspot from './icons/hubspot'
import IconHubspotOutline from './icons/hubspot-outline'
import IconImages from './icons/images'
import IconImpression from './icons/impressions'
import IconInfo from './icons/info'
import IconInfoOutline from './icons/info-outline'
import IconInstagramPlain from './icons/instagram-plain'
import IconInstagram from './icons/instagram'
import IconInstagramOutline from './icons/instagram-outline'
import IconJSON from './icons/json'
import IconLastTime from './icons/last-time'
import IconLine from './icons/line'
import IconLikes from './icons/likes'
import IconLinkedinDisabled from './icons/linkedin-disabled'
import IconLinkedinPlain from './icons/linkedin-plain'
import IconLinkedIn from './icons/linked-in'
import IconLinkedinOutline from './icons/linkedin-outline'
import IconLoader from './icons/loader'
import IconLock from './icons/lock'
import IconLockDisabled from './icons/lock-disabled'
import IconPlainut from './icons/logout'
import IconLowerThan from './icons/lower-than'
import IconMagnifier from './icons/magnifier'
import IconMailOpened from './icons/mail-opened'
import IconMailchimpPlain from './icons/mailchimp-plain'
import IconMailchimp from './icons/mailchimp'
import IconMailchimpOutline from './icons/mailchimp-outline'
import IconMailshakeDisabled from './icons/mailshake-disabled'
import IconMailshakePlain from './icons/mailshake-plain'
import IconMailshake from './icons/mailshake'
import IconMailShakeOutline from './icons/mailshake-outline'
import IconMenu from './icons/menu'
import IconMenuDots from './icons/menu-dots'
import IconMessageExclaimation from './icons/message-exclaimation'
import IconMessage from './icons/message'
import IconMongo from './icons/mongo'
import IconNeutralSmile from './icons/neutral-smile'
import IconNewTab from './icons/new-tab'
import IconNoDocument from './icons/no-document'
import IconNotificationBellUnread from './icons/notification-bell-unread'
import IconNotificationBell from './icons/notification-bell'
import IconOverview from './icons/overview'
import IconPack from './icons/pack'
import IconPage from './icons/page'
import IconPassword from './icons/password'
import IconPdf from './icons/pdf'
import IconPinterestDisabled from './icons/pinterest-disabled'
import IconPinterestPlain from './icons/pinterest-plain'
import IconPinterest from './icons/pinterest'
import IconPinterestOutline from './icons/pinterest-outline'
import IconPipeDriveDisabled from './icons/pipedrive-disabled'
import IconPipeDrivePlain from './icons/pipedrive-plain'
import IconPipeDrive from './icons/pipedrive'
import IconPipeDriveOutline from './icons/pipedrive-outline'
import IconPlus from './icons/plus'
import IconPost from './icons/post'
import IconPostgres from './icons/postgres'
import IconPosts from './icons/posts'
import IconPptx from './icons/pptx'
import IconPricingFree from './icons/pricing-free'
import IconPricingProfessional from './icons/pricing-professional'
import IconPricingStarter from './icons/pricing-starter'
import IconPricingTeam from './icons/pricing-team'
import IconProfile from './icons/profile'
import IconProfileView from './icons/profile-view'
import IconProfileSettings from './icons/profile-settings'
import IconProperties from './icons/properties'
import IconQuoraAdsDisabled from './icons/quora-ads-disabled'
import IconQuoraAdsPlain from './icons/quora-ads-plain'
import IconQuoraAds from './icons/quora-ads'
import IconQuoraAdsOutline from './icons/quora-ads-outline'
import IconReach from './icons/reach'
import IconRedditAdsDisabled from './icons/reddit-ads-disabled'
import IconRedditAdsPlain from './icons/reddit-ads-plain'
import IconRedditAds from './icons/reddit-ads'
import IconRedditAdsOutline from './icons/reddit-ads-outline'
import IconRefresh from './icons/refresh'
import IconReport from './icons/report'
import IconReportingDev from './icons/reporting-dev'
import IconReportsNavigation from './icons/reports-navigation'
import IconRoundCheckmark from './icons/round-checkmark'
import IconRoundQuestion from './icons/round-question'
import IconRoundExclaimationError from './icons/rounded-exclaimation-error'
import IconSalesForceDisabled from './icons/salesforce-disabled'
import IconSalesForcePlain from './icons/salesforce-plain'
import IconSalesForce from './icons/salesforce'
import IconSalesForceOutline from './icons/salesforce-outline'
import IconSearch from './icons/search'
import IconSemRushDisabled from './icons/sem-rush-disabled'
import IconSemRushPlain from './icons/sem-rush-plain'
import IconSemRush from './icons/sem-rush'
import IconSemRushOutline from './icons/sem-rush-outline'
import IconSeoMonitorDisabled from './icons/seo-monitor-disabled'
import IconSeoMonitorPlain from './icons/seo-monitor-plain'
import IconSeoMonitor from './icons/seo-monitor'
import IconSeoMonitorOutline from './icons/seo-monitor-outline'
import IconSettings from './icons/settings'
import IconShares from './icons/shares'
import IconSheets from './icons/sheets'
import IconGoogleSheets from './icons/googleSheets'
import IconShopifyDisabled from './icons/shopify-ads-disabled'
import IconShopifyPlain from './icons/shopify-ads-plain'
import IconShopify from './icons/shopify-ads'
import IconShopifyOutline from './icons/shopify-ads-outline'
import IconSilverStar from './icons/silver-star'
import IconSimplePlus from './icons/simple-plus'
import IconGooglSlides from './icons/google-slides'
import IconSliders from './icons/sliders'
import IconSmile from './icons/smile'
import IconSnowflake from './icons/snowflake'
import IconSortAsc from './icons/sort-asc'
import IconSortDesc from './icons/sort-desc'
import IconSparrowMain from './icons/sparrow-main'
import IconSparrow from './icons/sparrow'
import IconSparrowOutline from './icons/sparrow-outline'
import IconSpeaker from './icons/speaker'
import IconSpotifyAdsDisabled from './icons/spotify-ads-disabled'
import IconSpotifyAdsPlain from './icons/spotify-ads-plain'
import IconSpotifyAds from './icons/spotify-ads'
import IconSpotifyAdsOutline from './icons/spotify-ads-outline'
import IconSync from './icons/sync'
import IconTeam from './icons/team'
import IconTemplate from './icons/template'
import IconTemplateSettings from './icons/template-settings'
import IconThumbDown from './icons/thumb-down'
import IconTiktokDisabled from './icons/tiktok-disabled'
import IconTiktokPlain from './icons/tiktok-plain'
import IconTiktok from './icons/tiktok'
import IconTiktokOutline from './icons/tiktok-outline'
import IconTrash from './icons/trash'
import IconTriangularArrow from './icons/triangular-arrow'
import IconTriangularExclaimationError from './icons/triangular-exclaimation-error'
import IconTrophy from './icons/trophy'
import IconTwitterDisabled from './icons/twitter-disabled'
import IconTwitterPlain from './icons/twitter-plain'
import IconTwitter from './icons/twitter'
import IconTwitterOutline from './icons/twitter-outline'
import IconTwoArrows from './icons/two-arrows'
import IconVerifyEmail from './icons/verify-email'
import IconVideo from './icons/video'
import IconView from './icons/view'
import IconViews from './icons/views'
import IconWatchTime from './icons/watch-time'
import IconWeb from './icons/web'
import IconWooCommerceDisabled from './icons/woo-commerce-disabled'
import IconWooCommercePlain from './icons/woo-commerce-plain'
import IconWooCommerce from './icons/woo-commerce'
import IconWooCommerceOutline from './icons/woo-commerce-outline'
import IconYoutubeDisabled from './icons/youtube-disabled'
import IconYoutubePlain from './icons/youtube-plain'
import IconYoutube from './icons/youtube'
import IconYoutubeDislike from './icons/youtube-dislike'
import IconYoutubeLike from './icons/youtube-like'
import IconYoutubeOutline from './icons/youtube-outline'
import IconZoomHandle from './icons/zoom-handle'
import IconZoomIn from './icons/zoom-in'
import IconZoomOut from './icons/zoom-out'
import IconAdobeAnalytics from './icons/adobeAnalytics'
import IconAdobeAnalyticsPlain from './icons/adobeAnalytics-plain'
import IconAdobeAnalyticsOutline from './icons/adobeAnalytics-outline'
import IconAdobeAnalyticsDisabled from './icons/adobeAnalytics-disabled'
import IconAds from './icons/ads'
import IconAdset from './icons/adset'
import IconConvertKit from './icons/convertKit'
import IconConvertKitPlain from './icons/convertKit-plain'
import IconConvertKitOutline from './icons/convertKit-outline'
import IconConvertKitDisabled from './icons/convertKit-disabled'
import IconDrip from './icons/drip'
import IconDripPlain from './icons/drip-plain'
import IconDripOutline from './icons/drip-outline'
import IconDripDisabled from './icons/drip-disabled'
import IconEcharge from './icons/echarge'
import IconEchargePlain from './icons/echarge-plain'
import IconEchargeOutline from './icons/echarge-outline'
import IconEchargeDisabled from './icons/echarge-disabled'
import IconGmass from './icons/gmass'
import IconGmassPlain from './icons/gmass-plain'
import IconGmassOutline from './icons/gmass-outline'
import IconGmassDisabled from './icons/gmass-disabled'
import IconGoogleSheet from './icons/googleSheet'
import IconGoogleSheetPlain from './icons/googleSheet-plain'
import IconGoogleSheetOutline from './icons/googleSheet-outline'
import IconGoogleSheetDisabled from './icons/googleSheet-disabled'
import IconJsonApi from './icons/jsonApi'
import IconJsonApiPlain from './icons/jsonApi-plain'
import IconJsonApiOutline from './icons/jsonApi-outline'
import IconJsonApiDisabled from './icons/jsonApi-disabled'
import IconKlaviyo from './icons/klaviyo'
import IconKlaviyoPlain from './icons/klaviyo-plain'
import IconKlaviyoOutline from './icons/klaviyo-outline'
import IconKlaviyoDisabled from './icons/klaviyo-disabled'
import IconLemlist from './icons/lemList'
import IconLemlistPlain from './icons/lemlist-plain'
import IconLemlistOutline from './icons/lemlist-outline'
import IconLemlistDisabled from './icons/lemlist-disabled'
import IconOtherClose from './icons/otherClose'
import IconOtherClosePlain from './icons/otherClose-plain'
import IconOtherCloseOutline from './icons/otherClose-outline'
import IconOtherCloseDisabled from './icons/otherClose-disabled'
import IconPlausible from './icons/plausible'
import IconPlausiblePlain from './icons/plausible-plain'
import IconPlausibleOutline from './icons/plausible-outline'
import IconPlausibleDisabled from './icons/plausible-disabled'
import IconRevealjs from './icons/revealjs'
import IconRecycle from './icons/recycle'
import IconSendinblue from './icons/sendinblue'
import IconSendinbluePlain from './icons/sendinblue-plain'
import IconSendinblueOutline from './icons/sendinblue-outline'
import IconSendinblueDisabled from './icons/sendinblue-disabled'
import IconGoogleSearchConsole from './icons/googleSearchConsole'
import IconGoogleSearchConsolePlain from './icons/googleSearchConsole-plain'
import IconGoogleSearchConsoleOutline from './icons/googleSearchConsole-outline'
import IconGoogleSearchConsoleDisabled from './icons/googleSearchConsole-disabled'
import IconTiktokAds from './icons/tiktokAds'
import IconTiktokAdsPlain from './icons/tiktokAds-plain'
import IconTiktokAdsOutline from './icons/tiktokAds-outline'
import IconTiktokAdsDisabled from './icons/tiktokAds-disabled'
import IconZoho from './icons/zoho'
import IconZohoPlain from './icons/zoho-plain'
import IconZohoOutline from './icons/zoho-outline'
import IconZohoDisabled from './icons/zoho-disabled'

export const options = [
  'api',
  'activeCampaign',
  'activeCampaign-disabled',
  'activeCampaign-outline',
  'activeCampaign-plain',
  'adobeAnalytics',
  'adobeAnalytics-disabled',
  'adobeAnalytics-outline',
  'adobeAnalytics-plain',
  'ads',
  'adset',
  'analytics',
  'angry',
  'arrow',
  'arrow-clock',
  'arrow-left',
  'arrow-right',
  'badge',
  'bar',
  'bigCommerce',
  'bigCommerce-disabled',
  'bigCommerce-outline',
  'bigCommerce-plain',
  'billing',
  'bingAds',
  'bingAds-disabled',
  'bingAds-outline',
  'bingAds-plain',
  'book',
  'bounce',
  'bronze-star',
  'brush',
  'calendar',
  'camera',
  'canva',
  'chart',
  'check',
  'checkmark',
  'circular-datasource',
  'circular-datasource-large',
  'circular-green-tick',
  'circular-play',
  'circular-refresh',
  'clicks',
  'close',
  'comments',
  'competition',
  'competitve',
  'constantContact',
  'constantContact-disabled',
  'constantContact-outline',
  'constantContact-plain',
  'convertKit',
  'convertKit-disabled',
  'convertKit-outline',
  'convertKit-plain',
  'copy',
  'create-report',
  'credit-card',
  'crown',
  'csv',
  'csv-outline',
  'csv-plain',
  'csv-new',
  'cube',
  'custom-template',
  'danger',
  'dash',
  'drag',
  'dashboard',
  'dataStudio',
  'database',
  'datasources',
  'date-dropdown',
  'default-avatar',
  'default-client',
  'default-image',
  'default-metric',
  'document',
  'dollar',
  'download',
  'drip',
  'drip-disabled',
  'drip-outline',
  'drip-plain',
  'echarge',
  'echarge-disabled',
  'echarge-outline',
  'echarge-plain',
  'edit',
  'embed',
  'embed-code',
  'empty',
  'engagement',
  'equal',
  'facebook',
  'facebook-outline',
  'facebook-plain',
  'facebookAds',
  'facebookAds-outline',
  'facebookAds-plain',
  'flodesk',
  'flodesk-outline',
  'flodesk-plain',
  'flodesk-disabled',
  'filter',
  'folder',
  'followers',
  'gmass',
  'gmass-disabled',
  'gmass-outline',
  'gmass-plain',
  'gold-star',
  'google',
  'googleAds',
  'googleAds-outline',
  'googleAds-plain',
  'googleAnalytics',
  'googleAnalytics-outline',
  'googleAnalytics-plain',
  'googleAnalytics4',
  'googleAnalytics4-outline',
  'googleAnalytics4-plain',
  'googleDoc',
  'googleDocs',
  'googleDrive',
  'googleMyBusiness',
  'googleMyBusiness-disabled',
  'googleMyBusiness-outline',
  'googleMyBusiness-plain',
  'googleSearchConsole',
  'googleSearchConsole-disabled',
  'googleSearchConsole-outline',
  'googleSearchConsole-plain',
  'googleSheet',
  'googleSheet-disabled',
  'googleSheet-outline',
  'googleSheet-plain',
  'googleSlides',
  'grid',
  'greater-than',
  'happy',
  'heavy-plus',
  'home',
  'hubspot',
  'hubspot-disabled',
  'hubspot-outline',
  'hubspot-plain',
  'images',
  'impressions',
  'info',
  'info-outline',
  'instagram',
  'instagram-outline',
  'instagram-plain',
  'json',
  'jsonApi',
  'jsonApi-disabled',
  'jsonApi-outline',
  'jsonApi-plain',
  'klaviyo',
  'klaviyo-disabled',
  'klaviyo-outline',
  'klaviyo-plain',
  'last-time',
  'lemlist',
  'lemlist-disabled',
  'lemlist-outline',
  'lemlist-plain',
  'likes',
  'line',
  'linkedin',
  'linkedin-disabled',
  'linkedin-outline',
  'linkedin-plain',
  'linkedinAds',
  'linkedinAds-disabled',
  'linkedinAds-outline',
  'linkedinAds-plain',
  'loading',
  'lock',
  'lock-disabled',
  'logout',
  'lower-than',
  'magnifier',
  'mail-opened',
  'mailchimp',
  'mailchimp-outline',
  'mailchimp-plain',
  'mailshake',
  'mailshake-disabled',
  'mailshake-outline',
  'mailshake-plain',
  'menu',
  'menu-dots',
  'message',
  'message-exclaimation',
  'mongo',
  'neutral-smile',
  'new-tab',
  'no-document',
  'notification-bell-unread',
  'notification-bell',
  'otherClose',
  'otherClose-disabled',
  'otherClose-outline',
  'otherClose-plain',
  'overview',
  'pack',
  'page',
  'password',
  'pdf',
  'pinterest',
  'pinterest-disabled',
  'pinterest-outline',
  'pinterest-plain',
  'pipedrive',
  'pipedrive-disabled',
  'pipedrive-outline',
  'pipedrive-plain',
  'plausible',
  'plausible-disabled',
  'plausible-outline',
  'plausible-plain',
  'plus',
  'post',
  'posts',
  'postgres',
  'pptx',
  'pricing-free',
  'pricing-professional',
  'pricing-starter',
  'pricing-team',
  'profile',
  'profile-settings',
  'profile-view',
  'properties',
  'quoraAds',
  'quoraAds-disabled',
  'quoraAds-outline',
  'quoraAds-plain',
  'reach',
  'recycle',
  'revealjs',
  'redditAds',
  'redditAds-disabled',
  'redditAds-outline',
  'redditAds-plain',
  'refresh',
  'report',
  'reports-navigation',
  'round-checkmark',
  'round-question',
  'rounded-exclaimation',
  'salesforce',
  'salesforce-disabled',
  'salesforce-outline',
  'salesforce-plain',
  'search',
  'semRush',
  'semRush-disabled',
  'semRush-outline',
  'semRush-plain',
  'sendinblue',
  'sendinblue-disabled',
  'sendinblue-outline',
  'sendinblue-plain',
  'seoMonitor',
  'seoMonitor-disabled',
  'seoMonitor-outline',
  'seoMonitor-plain',
  'settings',
  'shares',
  'sheets',
  'googleSheets',
  'shopify',
  'shopify-disabled',
  'shopify-outline',
  'shopify-plain',
  'silver-star',
  'simple-plus',
  'sliders',
  'smile',
  'snowflake',
  'sort-asc',
  'sort-desc',
  'sparrow-main',
  'sparrow',
  'sparrow-outline',
  'speaker',
  'spotifyAds',
  'spotifyAds-disabled',
  'spotifyAds-outline',
  'spotifyAds-plain',
  'sync',
  'team',
  'template',
  'template-settings',
  'thumb-down',
  'tiktok',
  'tiktok-disabled',
  'tiktok-outline',
  'tiktok-plain',
  'tiktokAds',
  'tiktokAds-disabled',
  'tiktokAds-outline',
  'tiktokAds-plain',
  'trash',
  'triangular-arrow',
  'triangular-exclaimation',
  'trophy',
  'twitter',
  'twitter-disabled',
  'twitter-outline',
  'twitter-plain',
  'twitterAds',
  'twitterAds-disabled',
  'twitterAds-outline',
  'twitterAds-plain',
  'two-arrows',
  'verify-email',
  'video',
  'view',
  'views',
  'watch-time',
  'web',
  'wooCommerce',
  'wooCommerce-disabled',
  'wooCommerce-outline',
  'wooCommerce-plain',
  'youtube',
  'youtube-disabled',
  'youtube-dislike',
  'youtube-like',
  'youtube-outline',
  'youtube-plain',
  'youtubeAds',
  'youtubeAds-disabled',
  'youtubeAds-outline',
  'youtubeAds-plain',
  'zoho',
  'zoho-disabled',
  'zoho-outline',
  'zoho-plain',
  'zoom-handle',
  'zoom-in',
  'zoom-out',
  'reporting-dev',
  'customer',
  'reporting-dashboard',
  'reporting-email'
] as const

export type IconVariant = (typeof options)[number]

export interface Props extends SVGAttributes<SVGElement> {
  variant: IconVariant
}

const Icon: FC<Props> = ({ variant, color, ...props }: Props) => {
  switch (variant) {
    case 'api':
      return <IconAPI style={{color:color}} {...props} />

    case 'activeCampaign-disabled':
      return <IconActiveCampaignDisabled style={{color:color}} {...props} />

    case 'activeCampaign-plain':
      return <IconActiveCampaignPlain style={{color:color}} {...props} />

    case 'activeCampaign':
      return <IconActiveCampaign style={{color:color}} {...props} />

    case 'activeCampaign-outline':
      return <IconActiveCampaignOutline style={{color:color}} {...props} />

    case 'adobeAnalytics':
      return <IconAdobeAnalytics style={{color:color}} {...props} />

    case 'adobeAnalytics-plain':
      return <IconAdobeAnalyticsPlain style={{color:color}} {...props} />

    case 'adobeAnalytics-outline':
      return <IconAdobeAnalyticsOutline style={{color:color}} {...props} />

    case 'adobeAnalytics-disabled':
      return <IconAdobeAnalyticsDisabled style={{color:color}} {...props} />

    case 'ads':
      return <IconAds style={{color:color}} {...props} />

    case 'adset':
      return <IconAdset style={{color:color}} {...props} />

    case 'analytics':
      return <IconAnalytics style={{color:color}} {...props} />

    case 'angry':
      return <IconAngry style={{color:color}} {...props} />

    case 'arrow':
      return <IconArrow style={{color:color}} {...props} />

    case 'arrow-clock':
      return <IconArrowClock style={{color:color}} {...props} />

    case 'arrow-left':
      return <IconArrowLeft style={{color:color}} {...props} />

    case 'arrow-right':
      return <IconArrowRight style={{color:color}} {...props} />

    case 'badge':
      return <IconBadge style={{color:color}} {...props} />

    case 'bar':
      return <IconBar style={{color:color}} {...props} />

    case 'bigCommerce-disabled':
      return <IconBigCommerceDisabled style={{color:color}} {...props} />

    case 'bigCommerce-plain':
      return <IconBigCommercePlain style={{color:color}} {...props} />

    case 'bigCommerce':
      return <IconBigCommerce style={{color:color}} {...props} />

    case 'bigCommerce-outline':
      return <IconBigCommerceOutline style={{color:color}} {...props} />

    case 'billing':
      return <IconBilling style={{color:color}} {...props} />

    case 'bingAds-disabled':
      return <IconBingAdsDisabled style={{color:color}} {...props} />

    case 'bingAds-plain':
      return <IconBingAdsPlain style={{color:color}} {...props} />

    case 'bingAds':
      return <IconBingAds style={{color:color}} {...props} />

    case 'bingAds-outline':
      return <IconBingAdsOutline style={{color:color}} {...props} />

    case 'book':
      return <IconBook style={{color:color}}{...props} />

    case 'bounce':
      return <IconBounce style={{color:color}} {...props} />

    case 'bronze-star':
      return <IconBronzeStar style={{color:color}} {...props} />

    case 'brush':
      return <IconBrush style={{color:color}} {...props} />

    case 'calendar':
      return <IconCalendar style={{color:color}} {...props} />

    case 'camera':
      return <IconCamera style={{color:color}} {...props} />

    case 'canva':
      return <IconCanva style={{color:color}} {...props} />

    case 'chart':
      return <IconChart style={{color:color}} {...props} />
    case 'check':
      return <IconCheck style={{color:color}} {...props} />

    case 'checkmark':
      return <IconCheckmark style={{color:color}} {...props} />

    case 'circular-datasource':
      return <IconCircularDatasource style={{color:color}} {...props} />

    case 'circular-green-tick':
      return <IconCircularGreenTick style={{color:color}} {...props} />

    case 'circular-play':
      return <IconCircularPlay style={{color:color}} {...props} />

    case 'circular-refresh':
      return <IconCircularRefresh style={{color:color}} {...props} />

    case 'clicks':
      return <IconClicks style={{color:color}} {...props} />

    case 'close':
      return <IconClose style={{color:color}} {...props} />

    case 'comments':
      return <IconComments style={{color:color}} {...props} />

    case 'competition':
      return <IconCompetition style={{color:color}} {...props} />

    case 'competitve':
      return <IconCompetitive style={{color:color}} {...props} />

    case 'constantContact-disabled':
      return <IconConstantContactDisabled style={{color:color}} {...props} />

    case 'constantContact-plain':
      return <IconConstantContactPlain style={{color:color}} {...props} />

    case 'constantContact':
      return <IconConstantContact style={{color:color}} {...props} />

    case 'constantContact-outline':
      return <IconConstantContactOutline style={{color:color}} {...props} />

    case 'convertKit':
      return <IconConvertKit style={{color:color}} {...props} />

    case 'convertKit-plain':
      return <IconConvertKitPlain style={{color:color}} {...props} />

    case 'convertKit-outline':
      return <IconConvertKitOutline style={{color:color}} {...props} />

    case 'convertKit-disabled':
      return <IconConvertKitDisabled style={{color:color}} {...props} />

    case 'copy':
      return <IconCopy style={{color:color}} {...props} />

    case 'create-report':
      return <IconCreateReport style={{color:color}} {...props} />

    case 'credit-card':
      return <IconCreditCard style={{color:color}} {...props} />

    case 'crown':
      return <IconCrown style={{color:color}} {...props} />

    case 'csv':
      return <IconCsv style={{color:color}} {...props} />

    case 'csv-plain':
      return <IconCsvPlain style={{color:color}} {...props} />

    case 'csv-new':
      return <IconCSV style={{color:color}} {...props} />

    case 'csv-outline':
      return <IconCsvOutline style={{color:color}} {...props} />

    case 'cube':
      return <IconCube style={{color:color}} {...props} />

    case 'custom-template':
      return <IconCustomTemplate style={{color:color}} {...props} />

    case 'danger':
      return <IconDanger style={{color:color}} {...props} />

    case 'dash':
      return <IconDash style={{color:color}} {...props} />

    case 'drag':
      return <IconDrag style={{color:color}} {...props} />

    case 'dashboard':
      return <IconDashboard style={{color:color}} {...props} />

    case 'datasources':
      return <IconDatasources style={{color:color}} {...props} />

    case 'database':
      return <IconDatabase style={{color:color}} {...props} />

    case 'dataStudio':
      return <IconDataStudio style={{color:color}} {...props} />

    case 'circular-datasource-large':
      return <IconCircularDatasourceLarge style={{color:color}} {...props} />

    case 'date-dropdown':
      return <IconDateDropdown style={{color:color}} {...props} />

    case 'default-avatar':
      return <IconDefaultAvatar style={{color:color}} {...props} />

    case 'default-client':
      return <IconDefaultClient style={{color:color}} {...props} />

    case 'default-image':
      return <IconDefaultImage style={{color:color}} {...props} />

    case 'default-metric':
      return <IconDefaultMetrics style={{color:color}} {...props} />

    case 'document':
      return <IconDocument style={{color:color}} {...props} />

    case 'download':
      return <IconDownload style={{color:color}} {...props} />

    case 'dollar':
      return <IconDollar style={{color:color}} {...props} />

    case 'drip':
      return <IconDrip style={{color:color}} {...props} />

    case 'drip-plain':
      return <IconDripPlain style={{color:color}}{...props} />

    case 'drip-outline':
      return <IconDripOutline style={{color:color}} {...props} />

    case 'drip-disabled':
      return <IconDripDisabled style={{color:color}} {...props} />

    case 'echarge':
      return <IconEcharge style={{color:color}} {...props} />

    case 'echarge-plain':
      return <IconEchargePlain style={{color:color}} {...props} />

    case 'echarge-outline':
      return <IconEchargeOutline style={{color:color}} {...props} />

    case 'echarge-disabled':
      return <IconEchargeDisabled style={{color:color}} {...props} />

    case 'edit':
      return <IconEdit style={{color:color}} {...props} />

    case 'embed':
      return <IconEmbed style={{color:color}} {...props} />

    case 'embed-code':
      return <IconEmbedCode style={{color:color}} {...props} />

    case 'empty':
      return <IconEmpty style={{color:color}} {...props} />

    case 'equal':
      return <IconEqual style={{color:color}} {...props} />

    case 'engagement':
      return <IconEngagement style={{color:color}} {...props} />

    case 'facebook-plain':
      return <IconFacebookPlain style={{color:color}} {...props} />

    case 'facebook':
      return <IconFacebook style={{color:color}} {...props} />

    case 'facebook-outline':
      return <IconFacebookOutline style={{color:color}} {...props} />

    case 'facebookAds-plain':
      return <IconFacebookAdsPlain style={{color:color}} {...props} />

    case 'facebookAds':
      return <IconFacebookAds style={{color:color}} {...props} />

    case 'facebookAds-outline':
      return <IconFacebookAdsOutline style={{color:color}} {...props} />

    case 'flodesk':
      return <IconFlodesk style={{color:color}} {...props} />

    case 'flodesk-plain':
      return <IconFlodeskPlain style={{color:color}} {...props} />

    case 'flodesk-outline':
      return <IconFlodeskOutline style={{color:color}} {...props} />

    case 'flodesk-disabled':
      return <IconFlodeskDisabled style={{color:color}} {...props} />

    case 'filter':
      return <IconFilter style={{color:color}} {...props} />

    case 'folder':
      return <IconFolder style={{color:color}} {...props} />

    case 'followers':
      return <IconFollowers style={{color:color}} {...props} />

    case 'gmass':
      return <IconGmass style={{color:color}} {...props} />

    case 'gmass-plain':
      return <IconGmassPlain style={{color:color}} {...props} />

    case 'gmass-outline':
      return <IconGmassOutline style={{color:color}} {...props} />

    case 'gmass-disabled':
      return <IconGmassDisabled style={{color:color}} {...props} />

    case 'gold-star':
      return <IconGoldStar style={{color:color}} {...props} />

    case 'google':
      return <IconGoogle style={{color:color}} {...props} />

    case 'googleAds-plain':
      return <IconGoogleAdsPlain style={{color:color}} {...props} />

    case 'googleAds':
      return <IconGoogleAds style={{color:color}} {...props} />

    case 'googleAds-outline':
      return <IconGoogleAdsOutline style={{color:color}} {...props} />

    case 'googleAnalytics-plain':
      return <IconGoogleAnalyticsPlain style={{color:color}} {...props} />

    case 'googleAnalytics':
      return <IconGoogleAnalytics style={{color:color}} {...props} />

    case 'googleAnalytics-outline':
      return <IconGoogleAnalyticsOutline style={{color:color}} {...props} />

    case 'googleAnalytics4-plain':
      return <IconGoogleAnalyticsPlain style={{color:color}} {...props} />

    case 'googleAnalytics4':
      return <IconGoogleAnalytics style={{color:color}} {...props} />

    case 'googleAnalytics4-outline':
      return <IconGoogleAnalyticsOutline style={{color:color}} {...props} />

    case 'googleDoc':
      return <IconGoogleDoc style={{color:color}} {...props} />

    case 'googleDocs':
      return <IconGoogleDoc  style={{color:color}} {...props} />

    case 'googleDrive':
      return <IconGoogleDrive style={{color:color}} {...props} />

    case 'googleMyBusiness-disabled':
      return <IconGoogleMyBusinessDisabled style={{color:color}} {...props} />

    case 'googleMyBusiness-plain':
      return <IconGoogleMyBusinessPlain style={{color:color}} {...props} />

    case 'googleMyBusiness':
      return <IconGoogleMyBusiness style={{color:color}} {...props} />

    case 'googleMyBusiness-outline':
      return <IconGoogleMyBusinessOutline style={{color:color}} {...props} />

    case 'googleSearchConsole':
      return <IconGoogleSearchConsole style={{color:color}} {...props} />

    case 'googleSearchConsole-plain':
      return <IconGoogleSearchConsolePlain style={{color:color}} {...props} />

    case 'googleSearchConsole-outline':
      return <IconGoogleSearchConsoleOutline style={{color:color}} {...props} />

    case 'googleSearchConsole-disabled':
      return <IconGoogleSearchConsoleDisabled style={{color:color}} {...props} />

    case 'googleSheet':
      return <IconGoogleSheet style={{color:color}} {...props} />

    case 'googleSheet-plain':
      return <IconGoogleSheetPlain style={{color:color}} {...props} />

    case 'googleSheet-outline':
      return <IconGoogleSheetOutline style={{color:color}} {...props} />

    case 'googleSheet-disabled':
      return <IconGoogleSheetDisabled style={{color:color}} {...props} />

    case 'greater-than':
      return <IconGreaterThan style={{color:color}} {...props} />

    case 'grid':
      return <IconGrid style={{color:color}} {...props} />

    case 'happy':
      return <IconHappy style={{color:color}} {...props} />

    case 'heavy-plus':
      return <IconHeavyPlus style={{color:color}} {...props} />

    case 'home':
      return <IconHome style={{color:color}} {...props} />

    case 'hubspot-disabled':
      return <IconHubspotDisabled style={{color:color}} {...props} />

    case 'hubspot-plain':
      return <IconHubspotPlain style={{color:color}} {...props} />

    case 'hubspot':
      return <IconHubspot style={{color:color}} {...props} />

    case 'hubspot-outline':
      return <IconHubspotOutline style={{color:color}} {...props} />

    case 'images':
      return <IconImages style={{color:color}} {...props} />

    case 'impressions':
      return <IconImpression style={{color:color}} {...props} />

    case 'info':
      return <IconInfo style={{color:color}} {...props} />

    case 'info-outline':
      return <IconInfoOutline style={{color:color}} {...props} />

    case 'instagram-plain':
      return <IconInstagramPlain style={{color:color}} {...props} />

    case 'instagram':
      return <IconInstagram style={{color:color}} {...props} />

    case 'instagram-outline':
      return <IconInstagramOutline style={{color:color}} {...props} />

    case 'json':
      return <IconJSON style={{color:color}} {...props} />

    case 'jsonApi':
      return <IconJsonApi style={{color:color}} {...props} />

    case 'jsonApi-plain':
      return <IconJsonApiPlain style={{color:color}} {...props} />

    case 'jsonApi-outline':
      return <IconJsonApiOutline style={{color:color}} {...props} />

    case 'jsonApi-disabled':
      return <IconJsonApiDisabled style={{color:color}} {...props} />

    case 'klaviyo':
      return <IconKlaviyo style={{color:color}} {...props} />

    case 'klaviyo-plain':
      return <IconKlaviyoPlain style={{color:color}} {...props} />

    case 'klaviyo-outline':
      return <IconKlaviyoOutline style={{color:color}} {...props} />

    case 'klaviyo-disabled':
      return <IconKlaviyoDisabled style={{color:color}} {...props} />

    case 'last-time':
      return <IconLastTime style={{color:color}} {...props} />

    case 'lemlist':
      return <IconLemlist style={{color:color}} {...props} />

    case 'lemlist-plain':
      return <IconLemlistPlain style={{color:color}} {...props} />

    case 'lemlist-outline':
      return <IconLemlistOutline style={{color:color}} {...props} />

    case 'lemlist-disabled':
      return <IconLemlistDisabled style={{color:color}} {...props} />

    case 'line':
      return <IconLine style={{color:color}} {...props} />

    case 'likes':
      return <IconLikes style={{color:color}} {...props} />

    case 'linkedin-disabled':
      return <IconLinkedinDisabled style={{color:color}} {...props} />

    case 'linkedin-plain':
      return <IconLinkedinPlain style={{color:color}} {...props} />

    case 'linkedin':
      return <IconLinkedIn style={{color:color}} {...props} />

    case 'linkedin-outline':
      return <IconLinkedinOutline style={{color:color}} {...props} />

    case 'linkedinAds-disabled':
      return <IconLinkedinDisabled style={{color:color}} {...props} />

    case 'linkedinAds-plain':
      return <IconLinkedinPlain style={{color:color}} {...props} />

    case 'linkedinAds':
      return <IconLinkedIn style={{color:color}} {...props} />

    case 'linkedinAds-outline':
      return <IconLinkedinOutline style={{color:color}} {...props} />

    case 'loading':
      return <IconLoader style={{color:color}} {...props} />

    case 'lock':
      return <IconLock style={{color:color}} {...props} />

    case 'lock-disabled':
      return <IconLockDisabled style={{color:color}} {...props} />

    case 'logout':
      return <IconPlainut style={{color:color}} {...props} />

    case 'lower-than':
      return <IconLowerThan style={{color:color}} {...props} />

    case 'magnifier':
      return <IconMagnifier style={{color:color}} {...props} />

    case 'mail-opened':
      return <IconMailOpened style={{color:color}} {...props} />

    case 'mailchimp-plain':
      return <IconMailchimpPlain style={{color:color}} {...props} />

    case 'mailchimp':
      return <IconMailchimp style={{color:color}} {...props} />

    case 'mailchimp-outline':
      return <IconMailchimpOutline style={{color:color}} {...props} />

    case 'mailshake-disabled':
      return <IconMailshakeDisabled style={{color:color}} {...props} />

    case 'mailshake-plain':
      return <IconMailshakePlain style={{color:color}} {...props} />

    case 'mailshake':
      return <IconMailshake style={{color:color}} {...props} />

    case 'mailshake-outline':
      return <IconMailShakeOutline style={{color:color}} {...props} />

    case 'menu':
      return <IconMenu style={{color:color}} {...props} />

    case 'menu-dots':
      return <IconMenuDots style={{color:color}} {...props} />

    case 'message-exclaimation':
      return <IconMessageExclaimation style={{color:color}} {...props} />

    case 'message':
      return <IconMessage style={{color:color}} {...props} />

    case 'mongo':
      return <IconMongo style={{color:color}} {...props} />

    case 'neutral-smile':
      return <IconNeutralSmile style={{color:color}} {...props} />

    case 'new-tab':
      return <IconNewTab style={{color:color}} {...props} />

    case 'no-document':
      return <IconNoDocument style={{color:color}} {...props} />

    case 'notification-bell-unread':
      return <IconNotificationBellUnread style={{color:color}} {...props} />

    case 'notification-bell':
      return <IconNotificationBell style={{color:color}} {...props} />

    case 'otherClose':
      return <IconOtherClose style={{color:color}} {...props} />

    case 'otherClose-plain':
      return <IconOtherClosePlain style={{color:color}} {...props} />

    case 'otherClose-outline':
      return <IconOtherCloseOutline style={{color:color}} {...props} />

    case 'otherClose-disabled':
      return <IconOtherCloseDisabled style={{color:color}} {...props} />

    case 'overview':
      return <IconOverview style={{color:color}} {...props} />

    case 'pack':
      return <IconPack style={{color:color}} {...props} />

    case 'page':
      return <IconPage style={{color:color}} {...props} />

    case 'pdf':
      return <IconPdf style={{color:color}} {...props} />

    case 'password':
      return <IconPassword style={{color:color}} {...props} />

    case 'pinterest-disabled':
      return <IconPinterestDisabled style={{color:color}} {...props} />

    case 'pinterest-plain':
      return <IconPinterestPlain style={{color:color}} {...props} />

    case 'pinterest':
      return <IconPinterest style={{color:color}} {...props} />

    case 'pinterest-outline':
      return <IconPinterestOutline style={{color:color}} {...props} />

    case 'pipedrive-disabled':
      return <IconPipeDriveDisabled style={{color:color}} {...props} />

    case 'pipedrive-plain':
      return <IconPipeDrivePlain style={{color:color}} {...props} />

    case 'pipedrive':
      return <IconPipeDrive style={{color:color}} {...props} />

    case 'pipedrive-outline':
      return <IconPipeDriveOutline style={{color:color}} {...props} />

    case 'plausible':
      return <IconPlausible style={{color:color}} {...props} />

    case 'plausible-plain':
      return <IconPlausiblePlain style={{color:color}} {...props} />

    case 'plausible-outline':
      return <IconPlausibleOutline style={{color:color}} {...props} />

    case 'plausible-disabled':
      return <IconPlausibleDisabled style={{color:color}} {...props} />

    case 'plus':
      return <IconPlus style={{color:color}} {...props} />

    case 'post':
      return <IconPost style={{color:color}} {...props} />

    case 'postgres':
      return <IconPostgres style={{color:color}} {...props} />

    case 'posts':
      return <IconPosts style={{color:color}} {...props} />

    case 'pptx':
      return <IconPptx style={{color:color}} {...props} />

    case 'pricing-free':
      return <IconPricingFree style={{color:color}} {...props} />

    case 'pricing-professional':
      return <IconPricingProfessional style={{color:color}} {...props} />

    case 'pricing-starter':
      return <IconPricingStarter style={{color:color}} {...props} />

    case 'pricing-team':
      return <IconPricingTeam style={{color:color}} {...props} />

    case 'profile':
      return <IconProfile style={{color:color}} {...props} />

    case 'profile-view':
      return <IconProfileView style={{color:color}} {...props} />

    case 'profile-settings':
      return <IconProfileSettings style={{color:color}} {...props} />

    case 'properties':
      return <IconProperties style={{color:color}} {...props} />

    case 'quoraAds-disabled':
      return <IconQuoraAdsDisabled style={{color:color}} {...props} />

    case 'quoraAds-plain':
      return <IconQuoraAdsPlain style={{color:color}} {...props} />

    case 'quoraAds':
      return <IconQuoraAds style={{color:color}} {...props} />

    case 'quoraAds-outline':
      return <IconQuoraAdsOutline style={{color:color}} {...props} />

    case 'reach':
      return <IconReach style={{color:color}} {...props} />

    case 'recycle':
      return <IconRecycle style={{color:color}} {...props} />

    case 'revealjs':
      return <IconRevealjs style={{color:color}} {...props} />

    case 'redditAds-disabled':
      return <IconRedditAdsDisabled style={{color:color}} {...props} />

    case 'redditAds-plain':
      return <IconRedditAdsPlain style={{color:color}} {...props} />

    case 'redditAds':
      return <IconRedditAds style={{color:color}} {...props} />

    case 'redditAds-outline':
      return <IconRedditAdsOutline style={{color:color}} {...props} />

    case 'refresh':
      return <IconRefresh style={{color:color}} {...props} />

    case 'report':
      return <IconReport style={{color:color}} {...props} />

    case 'reports-navigation':
      return <IconReportsNavigation style={{color:color}} {...props} />

    case 'round-checkmark':
      return <IconRoundCheckmark style={{color:color}} {...props} />

    case 'round-question':
      return <IconRoundQuestion style={{color:color}} {...props} />

    case 'rounded-exclaimation':
      return <IconRoundExclaimationError style={{color:color}} {...props} />

    case 'salesforce-disabled':
      return <IconSalesForceDisabled style={{color:color}} {...props} />

    case 'salesforce-plain':
      return <IconSalesForcePlain style={{color:color}} {...props} />

    case 'salesforce':
      return <IconSalesForce style={{color:color}} {...props} />

    case 'salesforce-outline':
      return <IconSalesForceOutline style={{color:color}} {...props} />

    case 'search':
      return <IconSearch style={{color:color}} {...props} />

    case 'semRush-disabled':
      return <IconSemRushDisabled style={{color:color}} {...props} />

    case 'semRush-plain':
      return <IconSemRushPlain style={{color:color}} {...props} />

    case 'semRush':
      return <IconSemRush style={{color:color}} {...props} />

    case 'semRush-outline':
      return <IconSemRushOutline style={{color:color}} {...props} />

    case 'sendinblue':
      return <IconSendinblue style={{color:color}} {...props} />

    case 'sendinblue-plain':
      return <IconSendinbluePlain style={{color:color}} {...props} />

    case 'sendinblue-outline':
      return <IconSendinblueOutline style={{color:color}} {...props} />

    case 'sendinblue-disabled':
      return <IconSendinblueDisabled style={{color:color}} {...props} />

    case 'seoMonitor-disabled':
      return <IconSeoMonitorDisabled style={{color:color}} {...props} />

    case 'seoMonitor-plain':
      return <IconSeoMonitorPlain style={{color:color}} {...props} />

    case 'seoMonitor':
      return <IconSeoMonitor style={{color:color}} {...props} />

    case 'seoMonitor-outline':
      return <IconSeoMonitorOutline style={{color:color}} {...props} />

    case 'settings':
      return <IconSettings style={{color:color}} {...props} />

    case 'sheets':
      return <IconSheets style={{color:color}} {...props} />

    case 'silver-star':
      return <IconSilverStar style={{color:color}} {...props} />

    case 'simple-plus':
      return <IconSimplePlus style={{color:color}} {...props} />

    case 'shares':
      return <IconShares style={{color:color}} {...props} />

    case 'googleSheets':
      return <IconGoogleSheets style={{color:color}} {...props} />

    case 'shopify-disabled':
      return <IconShopifyDisabled style={{color:color}} {...props} />

    case 'shopify-plain':
      return <IconShopifyPlain style={{color:color}} {...props} />

    case 'shopify':
      return <IconShopify style={{color:color}} {...props} />

    case 'shopify-outline':
      return <IconShopifyOutline style={{color:color}} {...props} />

    case 'googleSlides':
      return <IconGooglSlides style={{color:color}} {...props} />

    case 'sliders':
      return <IconSliders style={{color:color}} {...props} />

    case 'smile':
      return <IconSmile style={{color:color}} {...props} />

    case 'snowflake':
      return <IconSnowflake style={{color:color}} {...props} />

    case 'sort-asc':
      return <IconSortAsc style={{color:color}} {...props} />

    case 'sort-desc':
      return <IconSortDesc style={{color:color}} {...props} />

    case 'sparrow-main':
      return <IconSparrowMain style={{color:color}} {...props} />

    case 'sparrow':
      return <IconSparrow style={{color:color}} {...props} />

    case 'sparrow-outline':
      return <IconSparrowOutline style={{color:color}} {...props} />

    case 'speaker':
      return <IconSpeaker style={{color:color}} {...props} />

    case 'spotifyAds-disabled':
      return <IconSpotifyAdsDisabled style={{color:color}} {...props} />

    case 'spotifyAds-plain':
      return <IconSpotifyAdsPlain style={{color:color}} {...props} />

    case 'spotifyAds':
      return <IconSpotifyAds style={{color:color}} {...props} />

    case 'spotifyAds-outline':
      return <IconSpotifyAdsOutline style={{color:color}} {...props} />

    case 'sync':
      return <IconSync style={{color:color}} {...props} />

    case 'team':
      return <IconTeam style={{color:color}} {...props} />

    case 'template':
      return <IconTemplate style={{color:color}} {...props} />

    case 'template-settings':
      return <IconTemplateSettings style={{color:color}} {...props} />

    case 'thumb-down':
      return <IconThumbDown style={{color:color}} {...props} />

    case 'tiktok-disabled':
      return <IconTiktokDisabled style={{color:color}} {...props} />

    case 'tiktok-plain':
      return <IconTiktokPlain style={{color:color}} {...props} />

    case 'tiktok':
      return <IconTiktok style={{color:color}} {...props} />

    case 'tiktok-outline':
      return <IconTiktokOutline style={{color:color}} {...props} />

    case 'tiktokAds':
      return <IconTiktokAds style={{color:color}} {...props} />

    case 'tiktokAds-plain':
      return <IconTiktokAdsPlain style={{color:color}} {...props} />

    case 'tiktokAds-outline':
      return <IconTiktokAdsOutline style={{color:color}} {...props} />

    case 'tiktokAds-disabled':
      return <IconTiktokAdsDisabled style={{color:color}} {...props} />

    case 'trash':
      return <IconTrash style={{color:color}} {...props} />

    case 'triangular-arrow':
      return <IconTriangularArrow style={{color:color}} {...props} />

    case 'triangular-exclaimation':
      return <IconTriangularExclaimationError style={{color:color}} {...props} />

    case 'trophy':
      return <IconTrophy style={{color:color}} {...props} />

    case 'twitter-disabled':
      return <IconTwitterDisabled style={{color:color}}{...props} />

    case 'twitter-plain':
      return <IconTwitterPlain style={{color:color}} {...props} />

    case 'twitter':
      return <IconTwitter style={{color:color}} {...props} />

    case 'twitter-outline':
      return <IconTwitterOutline style={{color:color}} {...props} />

    case 'twitterAds-disabled':
      return <IconTwitterDisabled style={{color:color}} {...props} />

    case 'twitterAds-plain':
      return <IconTwitterPlain style={{color:color}} {...props} />

    case 'twitterAds':
      return <IconTwitter style={{color:color}} {...props} />

    case 'twitterAds-outline':
      return <IconTwitterOutline style={{color:color}} {...props} />

    case 'two-arrows':
      return <IconTwoArrows style={{color:color}} {...props} />

    case 'verify-email':
      return <IconVerifyEmail style={{color:color}} {...props} />

    case 'video':
      return <IconVideo style={{color:color}} {...props} />

    case 'view':
      return <IconView style={{color:color}} {...props} />

    case 'views':
      return <IconViews style={{color:color}} {...props} />

    case 'watch-time':
      return <IconWatchTime style={{color:color}} {...props} />

    case 'web':
      return <IconWeb style={{color:color}} {...props} />

    case 'wooCommerce-disabled':
      return <IconWooCommerceDisabled style={{color:color}} {...props} />

    case 'wooCommerce-plain':
      return <IconWooCommercePlain style={{color:color}} {...props} />

    case 'wooCommerce':
      return <IconWooCommerce style={{color:color}} {...props} />

    case 'wooCommerce-outline':
      return <IconWooCommerceOutline style={{color:color}} {...props} />

    case 'youtube-disabled':
      return <IconYoutubeDisabled style={{color:color}} {...props} />

    case 'youtube-plain':
      return <IconYoutubePlain style={{color:color}} {...props} />

    case 'youtube':
      return <IconYoutube style={{color:color}} {...props} />

    case 'youtube-outline':
      return <IconYoutubeOutline style={{color:color}} {...props} />

    case 'youtubeAds-disabled':
      return <IconYoutubeDisabled style={{color:color}} {...props} />

    case 'youtubeAds-plain':
      return <IconYoutubePlain style={{color:color}} {...props} />

    case 'youtubeAds':
      return <IconYoutube style={{color:color}} {...props} />

    case 'youtubeAds-outline':
      return <IconYoutubeOutline style={{color:color}} {...props} />

    case 'youtube-dislike':
      return <IconYoutubeDislike style={{color:color}} {...props} />

    case 'youtube-like':
      return <IconYoutubeLike style={{color:color}} {...props} />

    case 'zoho':
      return <IconZoho style={{color:color}} {...props} />

    case 'zoho-plain':
      return <IconZohoPlain style={{color:color}} {...props} />

    case 'zoho-outline':
      return <IconZohoOutline style={{color:color}} {...props} />

    case 'zoho-disabled':
      return <IconZohoDisabled style={{color:color}} {...props} />

    case 'zoom-handle':
      return <IconZoomHandle style={{color:color}} {...props} />

    case 'zoom-in':
      return <IconZoomIn style={{color:color}} {...props} />

    case 'zoom-out':
      return <IconZoomOut style={{color:color}} {...props} />

    case 'reporting-dev':
      return <IconReportingDev style={{color:color}} {...props} />

    case 'reporting-dashboard':
      return <IconDashboardV2 style={{color:color}} {...props} />

    case 'reporting-email':
      return <IconEmail style={{color:color}} {...props} />

    case 'customer':
      return <IconCustomer style={{color:color}} {...props} />

    default:
      return <IconDefaultMetrics style={{color:color}} {...props} />
    // throw new Error(`Unsupported icon variant ${variant as string}`)
  }
}

export default Icon
