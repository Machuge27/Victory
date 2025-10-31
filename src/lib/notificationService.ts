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

// Simplified Email template generator
const generateEmailTemplate = (orderData: OrderNotification): string => {
  const { customer, items, totalPrice, orderNumber } = orderData;
  const orderNum = orderNumber || `ORD-${Date.now()}`;
  const orderDate = new Date().toLocaleString("en-KE", {
    dateStyle: "full",
    timeStyle: "short",
  });

  // Pre-process all items HTML
  const itemsHtml = items
    .map(
      (item, index) =>
        `<tr><td style="padding:8px;border-bottom:1px solid #ddd;">${
          index + 1
        }</td><td style="padding:8px;border-bottom:1px solid #ddd;">${
          item.name
        }</td><td style="padding:8px;border-bottom:1px solid #ddd;text-align:center;">${
          item.selectedSize
        }</td><td style="padding:8px;border-bottom:1px solid #ddd;text-align:center;">${
          item.quantity
        }</td><td style="padding:8px;border-bottom:1px solid #ddd;text-align:right;">KSh ${item.price.toLocaleString()}</td></tr>`
    )
    .join("");

  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>New Order</title></head><body style="margin:0;padding:20px;font-family:Arial,sans-serif;background-color:#f5f5f5;"><div style="max-width:600px;margin:0 auto;background-color:#ffffff;border:1px solid #ddd;"><div style="background-color:#4a5568;color:#ffffff;padding:20px;text-align:center;"><h1 style="margin:0;font-size:24px;">New Order Received</h1></div><div style="padding:20px;"><div style="background-color:#f8f9fa;padding:15px;margin-bottom:20px;border-left:4px solid #4a5568;"><p style="margin:0;"><strong>Order Number:</strong> ${orderNum}</p><p style="margin:5px 0 0 0;"><strong>Date:</strong> ${orderDate}</p></div><h2 style="color:#333;font-size:18px;border-bottom:2px solid #4a5568;padding-bottom:5px;">Customer Information</h2><p style="margin:10px 0;"><strong>Name:</strong> ${
    customer.name
  }</p><p style="margin:10px 0;"><strong>Phone:</strong> <a href="tel:${
    customer.phone
  }" style="color:#4a5568;">${
    customer.phone
  }</a></p><h2 style="color:#333;font-size:18px;border-bottom:2px solid #4a5568;padding-bottom:5px;margin-top:20px;">Order Details</h2><table style="width:100%;border-collapse:collapse;margin:15px 0;"><thead><tr style="background-color:#f8f9fa;"><th style="padding:10px 8px;text-align:left;border-bottom:2px solid #ddd;">#</th><th style="padding:10px 8px;text-align:left;border-bottom:2px solid #ddd;">Item</th><th style="padding:10px 8px;text-align:center;border-bottom:2px solid #ddd;">Size</th><th style="padding:10px 8px;text-align:center;border-bottom:2px solid #ddd;">Qty</th><th style="padding:10px 8px;text-align:right;border-bottom:2px solid #ddd;">Price</th></tr></thead><tbody>${itemsHtml}</tbody><tfoot><tr style="background-color:#f8f9fa;font-weight:bold;"><td colspan="4" style="padding:12px 8px;text-align:right;border-top:2px solid #ddd;">Total Amount:</td><td style="padding:12px 8px;text-align:right;color:#4a5568;font-size:18px;border-top:2px solid #ddd;">KSh ${totalPrice.toLocaleString()}</td></tr></tfoot></table><div style="background-color:#fff3cd;border-left:4px solid #ffc107;padding:15px;margin-top:20px;"><p style="margin:0;color:#856404;"><strong>Action Required:</strong> Please contact the customer to confirm the order and arrange delivery.</p></div></div><div style="background-color:#f8f9fa;padding:15px;text-align:center;border-top:1px solid #ddd;"><p style="margin:0;color:#666;font-size:12px;">Victory Shoe Collection - Admin Notification</p></div></div></body></html>`;
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

*My Contact Details:*
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
      const adminEmail = "johngachuru803@gmail.com";
      const subject = `New Order #${
        orderData.orderNumber || Date.now()
      } - Victory Shoe Collection`;

      // Pre-generate and process the complete HTML template
      const htmlBody = generateEmailTemplate(orderData);

      // Ensure template is fully processed before sending
      if (!htmlBody || htmlBody.length === 0) {
        console.error("Email template generation failed");
        return false;
      }

      const data = {
        email: adminEmail,
        subject: subject,
        body: htmlBody,
        is_html: true,
      };

      console.log("Sending email notification...");

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
        const errorText = await response.text();
        console.error("Failed to send email notification:", {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
        });
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