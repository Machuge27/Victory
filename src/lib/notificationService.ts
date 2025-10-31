import { CartItem } from "@/contexts/CartContext";

export interface CustomerDetails {
  name: string;
  phone: string;
}

export interface OrderNotification {
  customer: CustomerDetails;
  items: CartItem[];
  totalPrice: number;
  orderNumber?: string;
}

// Email template generator
const generateEmailTemplate = (orderData: OrderNotification): string => {
  const { customer, items, totalPrice, orderNumber } = orderData;
  const orderNum = orderNumber || `ORD-${Date.now()}`;
  const orderDate = new Date().toLocaleString('en-KE', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  const itemsHtml = items.map((item, index) => `
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 12px 8px;">${index + 1}</td>
      <td style="padding: 12px 8px;">${item.name}</td>
      <td style="padding: 12px 8px; text-align: center;">${item.selectedSize}</td>
      <td style="padding: 12px 8px; text-align: center;">${item.quantity}</td>
      <td style="padding: 12px 8px; text-align: right;">KSh ${item.price.toLocaleString()}</td>
    </tr>
  `).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Order - Victory Shoe Collection</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">🎉 New Order Received!</h1>
            </td>
          </tr>

          <!-- Order Number & Date -->
          <tr>
            <td style="padding: 20px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
                    <p style="margin: 0; color: #666; font-size: 14px;"><strong>Order Number:</strong> ${orderNum}</p>
                    <p style="margin: 8px 0 0 0; color: #666; font-size: 14px;"><strong>Date:</strong> ${orderDate}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Customer Details -->
          <tr>
            <td style="padding: 0 30px 20px 30px;">
              <h2 style="color: #333; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 8px;">
                Customer Information
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #555;">Name:</strong> 
                    <span style="color: #333;">${customer.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #555;">Phone:</strong> 
                    <a href="tel:${customer.phone}" style="color: #667eea; text-decoration: none;">${customer.phone}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Order Items -->
          <tr>
            <td style="padding: 0 30px 20px 30px;">
              <h2 style="color: #333; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #667eea; padding-bottom: 8px;">
                Order Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #eee; border-radius: 6px; overflow: hidden;">
                <thead>
                  <tr style="background-color: #f8f9fa;">
                    <th style="padding: 12px 8px; text-align: left; color: #555; font-size: 14px;">#</th>
                    <th style="padding: 12px 8px; text-align: left; color: #555; font-size: 14px;">Item</th>
                    <th style="padding: 12px 8px; text-align: center; color: #555; font-size: 14px;">Size</th>
                    <th style="padding: 12px 8px; text-align: center; color: #555; font-size: 14px;">Qty</th>
                    <th style="padding: 12px 8px; text-align: right; color: #555; font-size: 14px;">Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
                <tfoot>
                  <tr style="background-color: #f8f9fa; font-weight: bold;">
                    <td colspan="4" style="padding: 15px 8px; text-align: right; color: #333; font-size: 16px;">
                      Total Amount:
                    </td>
                    <td style="padding: 15px 8px; text-align: right; color: #667eea; font-size: 18px;">
                      KSh ${totalPrice.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </td>
          </tr>

          <!-- Action Required -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 4px;">
                <p style="margin: 0; color: #856404; font-size: 14px;">
                  <strong>⚠️ Action Required:</strong> Please contact the customer to confirm the order and arrange delivery.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="margin: 0; color: #666; font-size: 12px;">
                Victory Shoe Collection - Admin Notification
              </p>
              <p style="margin: 8px 0 0 0; color: #999; font-size: 11px;">
                This is an automated notification. Please do not reply to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

// WhatsApp message template (from customer's perspective)
const generateWhatsAppMessage = (orderData: OrderNotification): string => {
  const { customer, items, totalPrice } = orderData;

  const itemsList = items
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} (Size: ${item.selectedSize}) - Qty: ${
          item.quantity
        }`
    )
    .join("\n");

  return `Hi! I'm interested in purchasing the following items from Victory Shoe Collection:

*My Details:*
Name: ${customer.name}
Phone: ${customer.phone}

*Items I'm interested in:*
${itemsList}

*Total Amount: KSh ${totalPrice.toLocaleString()}*

Please let me know about availability and delivery arrangements. Thank you!`;
};

export const notificationService = {
  /**
   * Send order notification via both email and WhatsApp
   */
  async sendOrderNotification(orderData: OrderNotification): Promise<{
    email: boolean;
    whatsapp: boolean;
  }> {
    try {
      // Add order number if not provided
      if (!orderData.orderNumber) {
        orderData.orderNumber = `ORD-${Date.now()}`;
      }

      // Send both notifications
      const whatsappSent = await this.sendWhatsAppNotification(orderData);
      const emailSent = await this.sendEmailNotification(orderData);

      return {
        email: emailSent,
        whatsapp: whatsappSent,
      };
    } catch (error) {
      console.error("Error sending notifications:", error);
      throw error;
    }
  },

  /**
   * Send WhatsApp notification
   */
  async sendWhatsAppNotification(
    orderData: OrderNotification
  ): Promise<boolean> {
    try {
      // const ownerPhone = "254725871820";
      const ownerPhone = "254716260730";
      const message = generateWhatsAppMessage(orderData);
      const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(
        message
      )}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      console.log("WhatsApp notification sent successfully");
      return true;
    } catch (error) {
      console.error("Error sending WhatsApp notification:", error);
      return false;
    }
  },

  /**
   * Send email notification using the provided API endpoint
   */
  async sendEmailNotification(orderData: OrderNotification): Promise<boolean> {
    try {
      const adminEmail = "nj239332@gmail.com";
      const subject = `Key - New Order #${
        orderData.orderNumber || Date.now()
      } - Victory Shoe Collection`;

      // Generate HTML email template
      const htmlBody = generateEmailTemplate(orderData);

      const data = {
        email: adminEmail,
        subject: subject,
        body: htmlBody,
        is_html: true,
      };

      const response = await fetch(
        "https://mutaiservices.pythonanywhere.com/auth/emailer/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Email notification sent successfully");
        return true;
      } else {
        console.error(
          "Failed to send email notification:",
          response.statusText
        );
        return false;
      }
    } catch (error) {
      console.error("Error sending email notification:", error);
      return false;
    }
  },

  /**
   * Helper to get email HTML template (useful for testing or API integration)
   */
  getEmailTemplate(orderData: OrderNotification): string {
    return generateEmailTemplate(orderData);
  },
};