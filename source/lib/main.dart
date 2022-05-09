import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:zulhijaya_profile/pages/game/index.dart';
import 'package:zulhijaya_profile/pages/home/home.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';

void main() {
  setUrlStrategy(PathUrlStrategy());
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Zulhijaya',
      theme: ThemeData(
        fontFamily: GoogleFonts.poppins().fontFamily,
        primarySwatch: Colors.red,
        textTheme: GoogleFonts.poppinsTextTheme(),
      ),
      getPages: [
        GetPage(
          name: '/',
          page: () => const HomePage(),
          transition: Transition.fadeIn,
        ),
        GetPage(
          name: '/game',
          page: () => const GamePage(),
          transition: Transition.fadeIn,
        ),
      ],
    );
  }
}
