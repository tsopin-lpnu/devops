
$(function () {
    $('#bg-switch').bind('click', function (e) {
        $('body').toggleClass("body-bg");
    });

    let productArray1 = [
        {
            name: 'Валеріани екстракт таблетки №100',
            img: 'image/products/valeriani-ekstrakt.jpg',
            price: 72.90,
            oldPrice: 107.21
        },
        {
            name: 'Смекта апельсин-ваніль 3 г порошок №12',
            img: 'image/products/smekta-apel-sin-vanil-3-g.jpg',
            price: 106.80,
            oldPrice: 144.30
        },
        {
            name: 'Едем 5 мг таблетки №10',
            img: 'image/products/edem-5.jpg',
            price: 37.90,
            oldPrice: 62.13
        },
        {
            name: 'Ібупром 200 мг таблетки №10',
            img: 'image/products/ibuprom-200.jpg',
            price: 39.90,
            oldPrice: 75.28
        }
    ]

    let productArray2 = [
        {
            name: 'Аміксин ІС 0,125 г таблетки №3',
            img: 'image/products/amiksin-is.jpg',
            price: 109.90,
            oldPrice: 144.61
        },
        {
            name: 'Асконова Залізо зі смаком яблука таблетки №10x12',
            img: 'image/products/askonova-zalizo-zi-smakom-jabluka.jpg',
            price: 82.80,
            oldPrice: 129.38
        },
        {
            name: 'Но-шпа 40 мг таблетки №24',
            img: 'image/products/no-shpa.jpg',
            price: 49.90,
            oldPrice: 86.03
        },
        {
            name: 'Алергозан 0,5 мг/мл розчин 120 мл',
            img: 'image/products/alergozan.jpg',
            price: 69.90,
            oldPrice: 109.22
        }
    ]

    let tHTML = ''
    productArray1.forEach(function (item, i, arr) {
        tHTML += '<div class="card shadow-sm carousel-card">\n'
        tHTML += '    <div class="wrapper">\n'
        tHTML += '        <img src="' + item.img + '" class="card-img-top img-fluid p-2" alt="' + item.name + '">\n'
        tHTML += '    </div>\n'
        tHTML += '    <div class="card-body carousel-card-body">\n'
        tHTML += '        <h5 class="card-title carousel-card-price">' + item.price.toFixed(2).toString().replace(".", ",") + ' грн. <sup class="carousel-card-old-price">' + item.oldPrice.toFixed(2).toString().replace(".", ",") + ' грн.</sup></h5>\n'
        tHTML += '        <p class="card-text carousel-card-descript">' + item.name + '</p>\n'
        tHTML += '    </div>\n'
        tHTML += '    <div class="card-footer">\n'
        //tHTML += '        <a href="#" class="btn btn-rezerv"><i class="fa fa-phone" aria-hidden="true"></i> Забронювати</a>\n'
        tHTML += '        <button type="button" class="btn btn-rezerv" data-toggle="modal" data-target="#zakazModal" data-zakazName="' + item.name + '"><i class="fa fa-phone" aria-hidden="true"></i> Забронювати</button>'
        tHTML += '    </div>\n'
        tHTML += '</div>\n'
    });
    $("#card-deck_1").html(tHTML)


    tHTML = ''
    productArray2.forEach(function (item, i, arr) {
        tHTML += '<div class="card shadow-sm carousel-card">\n'
        tHTML += '    <div class="wrapper">\n'
        tHTML += '        <img src="' + item.img + '" class="card-img-top img-fluid p-2" alt="' + item.name + '">\n'
        tHTML += '    </div>\n'
        tHTML += '    <div class="card-body carousel-card-body">\n'
        tHTML += '        <h5 class="card-title carousel-card-price">' + item.price.toFixed(2).toString().replace(".", ",") + ' грн. <sup class="carousel-card-old-price">' + item.oldPrice.toFixed(2).toString().replace(".", ",") + ' грн.</sup></h5>\n'
        tHTML += '        <p class="card-text carousel-card-descript">' + item.name + '</p>\n'
        tHTML += '    </div>\n'
        tHTML += '    <div class="card-footer">\n'
        //tHTML += '        <a href="#" class="btn btn-rezerv"><i class="fa fa-phone" aria-hidden="true"></i> Забронювати</a>\n'
        tHTML += '        <button type="button" class="btn btn-rezerv" data-toggle="modal" data-target="#zakazModal" data-zakazName="' + item.name + '"><i class="fa fa-phone" aria-hidden="true"></i> Забронювати</button>'
        tHTML += '    </div>\n'
        tHTML += '</div>\n'
    });
    $("#card-deck_2").html(tHTML)

    $('#zakazModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var productName = button.data('zakazname')
        $(this).find('#product-name').val(productName)
    })

    $('#zakazSend').on('click', function (event) {
        $('#zakazModal').modal('hide')
        setTimeout(() => { $('#liveToast').toast('show'); }, 1000);
    })

    $('#liveToast').on('show.bs.toast', function () {
        (new Audio('msg.mp3')).play()
    })
      

});

