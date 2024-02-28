export const FormatModalX = (menu: any, e: any) => {
  if (window.innerWidth - e.pageX > menu.clientWidth) {
    return (menu.style.left = e.pageX + 'px')
  } else {
    return (menu.style.left = e.pageX - menu.clientWidth + 'px')
  }
}
export const FormatModalY = (menu: any, e: any) => {
  if (window.innerHeight - e.pageY > menu.clientHeight) {
    return (menu.style.top = e.pageY + 'px')
  } else {
    return (menu.style.top = e.pageY - menu.clientHeight + 'px')
  }
}
export const FormatPrice = (price: number) => {
  if (price) {
    const val = (price / 1).toFixed(0).replace(',', '.')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  } else {
    return 0
  }
}
export const FormatPayMethod = (code: string) => {
  if (code === 'Shopee Wallet (SPM)') {
    return 'Số dư tài khoản Shopee'
  } else if (
    code === 'Shopee Wallet' ||
    code === 'ShopeePay Linked Bank Account'
  ) {
    return 'Ví shopeepay'
  } else if (code?.search('WeChat') != -1) {
    return 'Ví wechat'
  } else if (code === 'GooglePay') {
    return 'GooglePay'
  } else if (code === 'Bank Transfer') {
    return 'Chuyển khoản ngân hàng'
  } else if (code === 'Apple Pay') {
    return 'Apple Pay'
  } else if (code === 'B2B Channel') {
    return 'B2B Channel'
  } else if (code?.search('Shopee Credit') != -1) {
    return 'Spaylater'
  } else if (code === 'Cash on Delivery') {
    return 'Thanh toán khi nhận hàng (COD)'
  } else if (code === 'Sacombank VA') {
    return 'Tài khoản ảo ( Sacombank)'
  } else if (code === 'Free') {
    return 'Miễn phí'
  } else if (code === 'Buyer-Seller Self Arrange') {
    return 'Thỏa thuận '
  } else if (code?.search('Airpay') != -1) {
    return 'Ví Airpay'
  } else if (code?.search('Cybersource') != -1) {
    return 'Thẻ tín dụng/ ghi nợ'
  } else {
    return ''
  }
}
