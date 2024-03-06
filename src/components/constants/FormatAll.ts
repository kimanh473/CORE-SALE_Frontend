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
export const FormatOrderStatus = (code: string): string => {
  switch (code) {
    case 'UNPAID':
    case 'INVOICE_PENDING':
      return 'Chờ xác nhận'
    case 'READY_TO_SHIP':
    case 'RETRY_SHIP':
      return 'Chờ lấy hàng'
    case 'TO_CONFIRM_RECEIVE':
    case 'PROCESSED':
      return 'Đang giao'
    case 'COMPLETED':
    case 'SHIPPED':
      return 'Đã giao'
    case 'CANCELLED':
      return 'Đã hủy'
    case 'RETURN':
    case 'TO_RETURN':
      return 'Trả hàng/Hoàn tiền'
    case 'FAILED_DELIVERY':
      return 'Giao không thành công'
    default:
      return 'Khác'
  }
}
export const FormatPayMethod = (code: string): string => {
  switch (code) {
    case 'Shopee Wallet (SPM)':
      return 'Số dư tài khoản Shopee'
    case 'Shopee Wallet':
    case 'ShopeePay Linked Bank Account':
      return 'Ví ShopeePay'
    case 'GooglePay':
      return 'Google Pay'
    case 'Apple Pay':
      return 'Apple Pay'
    case 'Bank Transfer':
      return 'Chuyển khoản ngân hàng'
    case 'B2B Channel':
      return 'B2B Channel'
    case 'Cash on Delivery':
      return 'Thanh toán khi nhận hàng (COD)'
    case 'Sacombank VA':
      return 'Tài khoản ảo (Sacombank)'
    case 'Free':
      return 'Miễn phí'
    case 'Buyer-Seller Self Arrange':
      return 'Thỏa thuận'
    default:
      if (code?.search('WeChat') != -1) {
        return 'Ví WeChat'
      } else if (code?.search('Shopee Credit') != -1) {
        return 'Spaylater'
      } else if (code?.search('Airpay') != -1) {
        return 'Ví Airpay'
      } else if (code?.search('Cybersource') != -1) {
        return 'Thẻ tín dụng/ghi nợ'
      }
      return ''
  }
}
export const FormatColorOrderStatus = (status: string): string => {
  switch (status) {
    case 'Chờ xác nhận':
      return 'warning'
    case 'Chờ lấy hàng':
    case 'Đang giao':
      return 'orange'
    case 'Đã giao':
      return 'success'
    case 'Đã hủy':
      return 'default'
    case 'Trả hàng/Hoàn tiền':
    case 'Giao không thành công':
      return 'error'
    default:
      return ''
  }
}
