"use client";

import {
  ArrowRight,
  Mail,
  MapPin,
  Navigation,
  Phone,
  PhoneCallIcon,
} from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { Toast, ToastDescription, ToastProvider } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { formSchema } from "@/schema/formSchema";
import { sendMessage } from "@/actions/sendMessage";
import Image from "next/image";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const res = await sendMessage(values)
      .then((res) => {
        if (!res.success) {
          toast({
            title: "Failed to send message",
            duration: 3000,
            variant: "destructive",
          });
        }
        toast({
          description: "Your message has been sent.",
          duration: 3000,
          variant: "vinoxToast",
        });
      })
      .catch((error) => {
        console.log("Error in data:", error);
      });

    form.reset({ name: "", email: "", phoneNo: "", message: "" });

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto mt-32 md:mt-40 p-6">
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 relative">
        {/* leftside  */}
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="text-3xl md:text-5xl text-[#0b2670] font-bold">
            Contact Details
          </div>
          <div className="flex flex-col justify-center items-start gap-4 text-sm md:text-xl ml-5 md:ml-0">
            <div className=" flex items-center gap-2 md:gap-4 group hover:text-[#0b2670] transition duration-300">
              <Phone className="w-4 h-4 md:w-6 md:h-6 inline-block" />
              <Link className="" href="tel:+912167265378">
                {" "}
                216-726-5378
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-4 group hover:text-[#0b2670] transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#000000"}
                fill={"none"}
                className="w-4 h-4 md:w-6 md:h-6 inline-block"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.8824 12C14.0519 12 15 13.0074 15 14.25C15 15.4926 14.0519 16.5 12.8824 16.5H10.4118C9.74625 16.5 9.4135 16.5 9.20675 16.2972C9 16.0945 9 15.7681 9 15.1154V12M12.8824 12C14.0519 12 15 10.9926 15 9.75C15 8.50736 14.0519 7.5 12.8824 7.5H10.4118C9.74625 7.5 9.4135 7.5 9.20675 7.70277C9 7.90554 9 8.2319 9 8.88462V12M12.8824 12H9"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link
                href="https://wa.me/917057573040"
                target="_blank"
                className="flex flex-row"
              >
                7057573040
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-4 group hover:text-[#0b2670] transition duration-300">
              <Mail className="w-4 h-4 md:w-6 md:h-6 inline-block " />
              <Link href="mailto:customercare@vinoxtechnologies.com">
                customercare@vinoxtechnologies.com
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <MapPin className="w-4 h-4 md:w-6 md:h-6 inline-block " />
              <div>
                Plot No B-146, MIDC, Wai Taluka, <br /> Wai - 412803.
                Maharashtra, India.
              </div>
            </div>
          </div>
        </div>

        {/* rightside  */}
        <div className="flex flex-col gap-4 ">
          <div className="text-3xl md:text-5xl mb-2 text-[#0b2670] font-semibold text-center">
            Send us message
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="blue" type="submit" className="w-full">
                {isLoading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-[#0b2670]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="font-semibold">Send</div>
                )}
              </Button>
            </form>
          </Form>

          {/* <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 md:gap-5"
          >
            <div>
              {" "}
              <Input
                type="name"
                id="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Input
                required
                value={email}
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="number"
                min={0}
                id="phoneNo"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div>
              <Textarea
                placeholder="Type your message here."
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button variant="blue" type="submit">
              {isLoading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-[#0b2670]"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : (
                <div className="font-semibold">Send</div>
              )}
            </Button>
          </form> */}
        </div>
      </div>

      {/* MAP */}
      <div className="flex flex-col items-center gap-2 mx-auto mt-16 md:mt-32 mb-5">
        <div>
          <Link
            href="https://www.google.com/maps/place/Vinox+Technologies/@17.9798707,73.8874571,17z/data=!4m14!1m7!3m6!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!2sVinox+Technologies!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl!3m5!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl?entry=ttu"
            target="_blank"
            className="mr-5 text-2xl flex gap-2 items-center"
          >
            <div className="text-[#0b2670] font-semibold">Find Us</div>
            <Navigation className="w-5 h-5 mt-1 fill-[#0b2670]  stroke-[#0b2670]" />
          </Link>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.965221477262!2d73.88752457594467!3d17.98035498301152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc25cfff3c3a357%3A0x871e263619e7bc3c!2sVinox%20Technologies!5e0!3m2!1sen!2sin!4v1713358765545!5m2!1sen!2sin"
            className="border w-[260px] h-[420px]  md:w-[900px] md:h-[580px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* BG */}

      {/* <Image
        src="/contact-us.svg"
        alt="contact-us.svg"
        width={600}
        height={600}
        className="absolute top-1/2 left-1/6 -translate-x-1/2"
      /> */}
    </div>
  );
};

export default Contact;
