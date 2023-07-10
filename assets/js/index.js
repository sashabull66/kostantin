const openLocalHost = () =>{
    const nextUrl = window.localStorage.getItem('url');
    const params = new URL(window.location.href).searchParams;
    const nextPageId = params.get('nextPageId')
    if (nextUrl) window.location.href = nextUrl;
    else {
        window.location.href = `http://localhost:9090/partner-offers?theme=light&device_app_id=D5BE307F-B93C-492E-98FA-135407A33FD3&device_uuid=57E56A16-00AD-41BD-96C6-8FFF6DE6D92C&applicationId=com.aweassist.app&device_locale=ru-US&device_id=D4C5B604-4C58-4CC5-8713-58558FB6D2D5&device_os_version=iOS%2016.0&client_id=mobile-app&device_timezone=+0300&device_boot_time=155982&scope=openid%20mobile-bank&device_model=x86_64&device_name=Phone&device_app_version=13.2.0&is_webview=v2${nextPageId ? '&nextPageId=' + (nextPageId + 1): ''}`
    }
}

const initApp = () => {
    window.addEventListener('load', () => {
        console.warn('*** Page loaded ***')
        const nextPageId = new URL(window.location.href).searchParams.get('nextPageId');
        if (nextPageId) {
            window.location.replace(`ios:setPageSettings/?pageTitle=title&pageId=${nextPageId}`)
        }
        window.location.replace('ios:setPageSettings/?pageTitle=title')
    })
}

const setTitle = (title, pageId) => {
    if (!pageId) {
        window.location.replace(`ios:setPageSettings/?pageTitle=${title || ''}`)

        return;
    }
    window.location.replace(`ios:setPageSettings/?pageTitle=${title}&pageId=${pageId}`);
}