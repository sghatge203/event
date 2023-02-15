const apiEndpoints = {
    // authentication apis
    routes_auth_signup: `/api/auth/signup`,
    routes_auth_signin: `/api/auth/signin`,


    routes_auth_partner_signup: `/api/auth/partner/signup`,
    routes_auth_partner_signin: `/api/auth/partner/signin`,
  
    // public apis
    routes_get_latest_event:'/api/public/latest-events',
    routes_get_event_details:'/api/public/event-details/:id',
    routes_get_event_ticket_details:'/api/public/tickets/:id',
    routes_public_get_category:"/api/public/get-category",
    routes_get_cities:"/api/public/get-cities",
    routes_public_all_cat_events:"/api/public/get-cat-events",
    routes_public_all_eve_by_catsIds:'/api/public/get-eve-by-cat',
    routes_public_search:"/api/public/search/:name",
    
    // User apis
    routes_user_get_profile:"/api/user/profile",
    routes_user_update:"/api/user/update",


    routes_user_add_comment: "/api/user/add-comment",
    routes_user_book_ticket: "/api/user/book-ticket",
    routes_user_get_ticket: "/api/user/get-ticket-details",
   
  
    // partner apis
    routes_partner_create_event: "/api/partner/create-event",
    routes_event_bypartner_list: "/api/partner/event-list",
    routes_partner_update: "/api/partner/update",
    routes_partner_event_delete: "/api/partner/delete-event/:eventId",
    routes_partner_add_comment: "/api/partner/add-comment",
    routes_partner_get_profile: "/api/partner/get-profile",
    routes_partner_get_category: "/api/partner/get-category",
    routes_partner_get_event: "/api/partner/get-event/:id",
    routes_partner_update_event: "/api/partner/update-event",
    routes_partner_event_publish: "/api/partner/publish-event/:id",
    routes_partner_get_eventUser: "/api/partner/event/users",
    // admin apis
    routes_user_list_all: "/api/admin/user-list",
    routes_partner_list_all: "/api/admin/partner-list",
    routes_event_list_all: "/api/admin/event-list",
    routes_add_categories: "/api/admin/add-category",
    routes_category_list_all: "/api/admin/category-list",
    routes_category_delete: "/api/admin/delete-category/:id",
    routes_add_city: "/api/admin/add-city",
    routes_city_all: "/api/admin/city-list",
    routes_city_delete: "/api/admin/delete-city/:id",
    routes_user_delete: "/api/admin/delete-user/:userId",
    routes_partner_delete: "/api/admin/delete-partner/:partnerId",
    routes_admin_event_delete: "/api/admin/delete-event/:eventId",
    routes_admin_delete_comment: "/api/admin/delete-comment/:commentId",
    routes_admin_get_comment: "/api/admin/get-comment",
    routes_admin_update_comment: "/api/admin/update-comment/:id",
    routes_admin_update_partner: "/api/admin/update-partner/:userId",
    routes_dashboard_count: "/api/admin/dashboard-count",
  };
  module.exports = apiEndpoints;
  